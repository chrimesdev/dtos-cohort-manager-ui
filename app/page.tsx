import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import SignIn from "@/app/components/signIn";
import { auth } from "@/app/lib/auth";

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
        <div className="nhsuk-grid-column-two-thirds">
          {session?.user ? (
            <>
              <h1>Overview</h1>
            </>
          ) : (
            <>
              <SignIn serviceName={serviceName} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
