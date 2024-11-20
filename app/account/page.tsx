import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/app/lib/auth";

export async function generateMetadata(): Promise<Metadata> {
  const session = await auth();

  if (session?.user) {
    return {
      title: `Account - ${process.env.SERVICE_NAME}`,
    };
  }

  return {
    title: `Log in with your Care Identity account - ${process.env.SERVICE_NAME}`,
  };
}

export default async function Page() {
  const session = await auth();

  return (
    <main className="nhsuk-main-wrapper" id="maincontent" role="main">
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1>Account</h1>
          <dl className="nhsuk-summary-list">
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Name</dt>
              <dd className="nhsuk-summary-list__value">
                {session?.user?.firstName} {session?.user?.lastName}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Organisation</dt>
              <dd className="nhsuk-summary-list__value">
                {session?.user?.orgName} ({session?.user?.odsCode})
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Roles</dt>
              <dd className="nhsuk-summary-list__value">
                {session?.user?.roles}
              </dd>
            </div>
          </dl>
          <p>
            <Link href="/">Go back to the Overview page</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
