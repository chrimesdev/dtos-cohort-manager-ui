import type { Metadata } from "next";
import CardGroup from "@/app/components/cardGroup";
import { fetchExceptions } from "@/app/lib/fetchExceptions";
import { getCurrentDate } from "@/app/lib/utils";
import type { ExceptionsAPI } from "@/app/types/exceptionsApi";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default async function Overview() {
  try {
    const exceptions = await fetchExceptions();
    const today = getCurrentDate();
    const exceptionsToday = exceptions.filter(
      (exception: ExceptionsAPI) =>
        exception.DateCreated.split("T")[0] === today
    );

    const cards = [
      {
        value: exceptions.length,
        label: "Breast screening exceptions",
        url: "/exceptions-summary",
      },
      {
        value: exceptionsToday.length,
        label: "Breast screening exceptions created today",
        url: `/exceptions-summary?date=${today}`,
      },
    ];

    return (
      <main className="nhsuk-main-wrapper" id="maincontent" role="main">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-full">
            <h1>Overview</h1>
            <CardGroup items={cards} />
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="nhsuk-main-wrapper" id="maincontent" role="main">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-two-thirds">
            <h1>Overview</h1>
            <p>
              There was an error loading the exceptions. Please try again later.
            </p>
            <p>
              Error: {error instanceof Error ? error.message : "Unknown error"}
            </p>
          </div>
        </div>
      </main>
    );
  }
}
