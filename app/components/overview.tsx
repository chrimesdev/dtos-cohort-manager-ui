import type { Metadata } from "next";
import CardGroup from "@/app/components/cardGroup";
import DataError from "@/app/components/dataError";
import { fetchExceptions } from "@/app/lib/fetchExceptions";
import { getCurrentDate } from "@/app/lib/utils";
import type { ExceptionsAPI } from "@/app/types/exceptionsApi";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default async function Overview() {
  try {
    const response = await fetchExceptions();
    const exceptions = response.Items;

    const today = getCurrentDate();
    const exceptionsToday = exceptions.filter(
      (exception: ExceptionsAPI) =>
        exception.DateCreated.split("T")[0] === today
    );

    const cards = [
      {
        value: response.TotalItems,
        label: "Breast screening exceptions",
        url: "/exceptions-summary",
      },
      {
        value: exceptionsToday.length,
        label: "Breast screening exceptions created today",
        url: `/exceptions-summary?filter=today`,
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
  } catch {
    return <DataError />;
  }
}
