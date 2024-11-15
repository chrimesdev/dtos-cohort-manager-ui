import type { Metadata } from "next";
import ExceptionsTable from "@/app/components/exceptionsTable";
import Breadcrumb from "../components/breadcrumb";
import { ExceptionDetails } from "@/app/types";

export const metadata: Metadata = {
  title: "Exceptions summary - Cohort Manager",
};

export default async function Page() {
  const breadcrumbItems = [{ label: "Overview", url: "/" }];

  try {
    const data = await fetch(
      `${process.env.EXCEPTIONS_API_URL}/api/GetValidationExceptions`
    );
    if (!data.ok) {
      throw new Error(`Error fetching data: ${data.statusText}`);
    }
    const exceptions = await data.json();

    const exceptionDetails: ExceptionDetails[] = exceptions.map(
      (exception: {
        ExceptionId: string;
        DateCreated: Date;
        RuleDescription: string;
        NhsNumber: number;
      }) => ({
        exceptionId: exception.ExceptionId,
        dateCreated: exception.DateCreated,
        shortDescription: exception.RuleDescription,
        nhsNumber: exception.NhsNumber,
      })
    );

    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Exceptions summary</h1>
          <ExceptionsTable exceptions={exceptionDetails} />
        </main>
      </>
    );
  } catch (error) {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Exceptions summary</h1>
          <p>
            There was an error loading the exceptions. Please try again later.
          </p>
          <p>
            Error: {error instanceof Error ? error.message : "Unknown error"}
          </p>
        </main>
      </>
    );
  }
}
