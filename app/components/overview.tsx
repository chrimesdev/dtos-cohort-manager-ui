import type { Metadata } from "next";
import CardGroup from "@/app/components/cardGroup";
import { fetchExceptions } from "@/app/lib/fetchExceptions";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default async function Overview() {
  try {
    const exceptions = await fetchExceptions();

    const cards = [
      {
        value: exceptions.length,
        label: "Breast screening exceptions",
        url: "/exceptions-summary",
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
