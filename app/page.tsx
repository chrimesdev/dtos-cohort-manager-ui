import type { Metadata } from "next";
import CardGroup from "@/app/components/cardGroup";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default async function Home() {
  try {
    const data = await fetch(
      `${process.env.EXCEPTIONS_API_URL}/api/GetValidationExceptions`
    );
    if (!data.ok) {
      throw new Error(`Error fetching data: ${data.statusText}`);
    }
    const exceptions = await data.json();

    const cards = [
      {
        value: exceptions.length,
        label: "Breast screening exceptions",
        url: "/exceptions-summary",
      },
    ];

    return (
      <main className="nhsuk-main-wrapper" id="maincontent" role="main">
        <h1>Overview</h1>
        <CardGroup items={cards} />
      </main>
    );
  } catch (error) {
    return (
      <>
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Overview</h1>
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
