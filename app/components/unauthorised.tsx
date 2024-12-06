import { auth } from "@/app/lib/auth";

export default async function Unauthorised() {
  const session = await auth();
  return (
    <main className="nhsuk-main-wrapper" id="maincontent" role="main">
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1>Unauthorised</h1>
          <p>
            You are logged in as {session?.user?.firstName}{" "}
            {session?.user?.lastName} ({session?.user?.uid}) but you are not
            authorised to view this page.
          </p>
          <p>
            Please email{" "}
            <a href="mailto:england.digitalscreening@nhs.net">
              england.digitalscreening@nhs.net
            </a>
            , providing the ID: {session?.user?.uid} if you believe you should
            have access.
          </p>
        </div>
      </div>
    </main>
  );
}
