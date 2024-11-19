import NextAuth, { Profile, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { jwtDecode } from "jwt-decode";
import { OAuthConfig } from "next-auth/providers";
import { DecodedCIS2Token } from "@/app/types";

const NHS_CIS2: OAuthConfig<Profile> = {
  id: "nhs-cis2",
  name: "NHS CIS2 Authentication",
  type: "oidc",
  issuer: `${process.env.AUTH_CIS2_ISSUER_URL}/openam/oauth2/realms/root/realms/NHSIdentity/realms/Healthcare`,
  wellKnown: `${process.env.AUTH_CIS2_ISSUER_URL}/openam/oauth2/realms/root/realms/NHSIdentity/realms/Healthcare/.well-known/openid-configuration`,
  clientId: process.env.AUTH_CIS2_CLIENT_ID,
  clientSecret: process.env.AUTH_CIS2_CLIENT_SECRET,
  authorization: {
    params: {
      acr_values: "AAL2_OR_AAL3_ANY",
      scope:
        "openid profile email nhsperson nationalrbacaccess associatedorgs professionalmemberships organisationalmemberships",
      response_type: "code",
      max_age: 240, // 4 minutes [Required by CIS2]
    },
  },
  client: {
    token_endpoint_auth_method: "client_secret_post",
  },
  idToken: false,
  checks: ["state"],
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [NHS_CIS2],
  session: {
    strategy: "jwt",
    maxAge: 900, // 15 minutes [Required by CIS2]
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    async signIn({ account }) {
      if (!account || typeof account.id_token !== "string") {
        return false;
      }

      const decodedToken: DecodedCIS2Token = jwtDecode(account.id_token);
      const AUTH_CIS2_ISSUER_URL = `${process.env.AUTH_CIS2_ISSUER_URL}/openam/oauth2/realms/root/realms/NHSIdentity/realms/Healthcare`;
      const AUTH_CIS2_CLIENT_ID = process.env.AUTH_CIS2_CLIENT_ID;

      const { iss, aud, idassurancelevel, authentication_assurance_level } =
        decodedToken;

      const isValidToken =
        iss === AUTH_CIS2_ISSUER_URL &&
        aud === AUTH_CIS2_CLIENT_ID &&
        idassurancelevel >= "2" &&
        authentication_assurance_level >= "2";

      return isValidToken;
    },
    async jwt({ token, profile }) {
      if (profile) {
        const {
          given_name: firstName,
          family_name: lastName,
          sub,
          sid,
          nhsid_org_memberships,
          nhsid_nrbac_roles,
        } = profile;

        const [{ org_name: orgName, org_code: odsCode }] =
          nhsid_org_memberships as {
            org_name: string;
            org_code: string;
          }[];

        const [{ role_name: roles }] = nhsid_nrbac_roles as {
          role_name: string;
        }[];

        Object.assign(token, {
          firstName,
          lastName,
          sub: sub ?? undefined,
          sid: sid ?? undefined,
          orgName,
          odsCode,
          roles,
        });
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        const { firstName, lastName, sub, sid, odsCode, orgName, roles } =
          token;

        Object.assign(session.user, {
          firstName,
          lastName,
          sub,
          sid,
          odsCode,
          orgName,
          roles,
        });
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/error",
  },
  events: {
    async session({ session }) {
      const maxAge = 900; // 15 minutes [Required by CIS2]
      const now = Math.floor(Date.now() / 1000);
      session.expires = new Date((now + maxAge) * 1000).toISOString();
    },
  },
});
