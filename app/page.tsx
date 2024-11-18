import type { Metadata } from "next";
import SignIn from "@/app/components/signIn";
import { auth } from "@/app/lib/auth";
import Overview from "@/app/components/overview";

export async function generateMetadata(): Promise<Metadata> {
  const session = await auth();

  if (session?.user) {
    return {
      title: "Overview - NHS England",
    };
  }

  return {
    title: "Log in with your Care Identity account - NHS England",
  };
}

export default async function Home() {
  const serviceName = process.env.SERVICE_NAME;
  const session = await auth();

  return (
    <main className="nhsuk-main-wrapper" id="maincontent" role="main">
      <div className="nhsuk-grid-row">
        {session?.user ? (
          <div className="nhsuk-grid-column-full">
            <Overview />
          </div>
        ) : (
          <div className="nhsuk-grid-column-two-thirds">
            <SignIn serviceName={serviceName} />
          </div>
        )}
      </div>
    </main>
  );
}
