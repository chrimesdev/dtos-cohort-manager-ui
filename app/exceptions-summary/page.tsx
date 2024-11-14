import type { Metadata } from "next";
import ExceptionsTable from "@/app/components/exceptionsTable";
import Breadcrumb from "../components/breadcrumb";

export const metadata: Metadata = {
  title: "Exceptions summary - Cohort Manager",
};

export default async function Page() {
  const breadcrumbItems = [{ label: "Overview", url: "/" }];
  const data = await fetch(
    `${process.env.EXCEPTIONS_API_URL}/api/GetValidationExceptions`
  );
  const exceptions = await data.json();

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main className="nhsuk-main-wrapper" id="maincontent" role="main">
        <h1>Exceptions summary</h1>
        <ExceptionsTable exceptions={exceptions} />
      </main>
    </>
  );
}
