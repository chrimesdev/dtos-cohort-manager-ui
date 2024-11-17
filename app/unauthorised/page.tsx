import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { auth } from "@/app/lib/auth";

export const metadata: Metadata = {
  title: "Unauthorised - NHS England",
};

export default async function Page() {
  const serviceName = process.env.SERVICE_NAME;
  const session = await auth();

  return (
    <>
      <Header serviceName={serviceName} />
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <h1>Unauthorised</h1>
              <p>You are not authorised to view this page.</p>
              <p>
                Please contact the system administrator if you believe this is
                an error.
              </p>
              {session?.user && (
                <p>
                  You are logged in as {session?.user?.firstName}{" "}
                  {session?.user?.lastName}.
                </p>
              )}
              <p>
                <Link href="/">Go back to the Overview page</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
