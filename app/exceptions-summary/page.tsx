import type { Metadata } from "next";
import BackLink from "../components/backLink";
import Header from "../components/header";
import Footer from "../components/footer";
import ExceptionsTable from "../components/exceptionsTable";

export const metadata: Metadata = {
  title: "Exceptions summary - Cohort Manager",
};

export default function Home() {
  const exceptions = [
    {
      nhsNumber: "723 333 6897",
      exceptionId: 10001767,
      dateCreated: "10 August 2024",
      description: "NHS number not reporting",
      type: "Duplicate",
      service: "Breast screening",
      status: "Open",
    },
    {
      nhsNumber: "623 444 8972",
      exceptionId: 10001768,
      dateCreated: "26 September 2024",
      description: "NHS number not reporting",
      type: "Confusion",
      service: "Breast screening",
      status: "Open",
    },
  ];

  return (
    <>
      <Header />
      <div className="nhsuk-width-container">
        <BackLink href="/" />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Exceptions summary</h1>
          <ExceptionsTable exceptions={exceptions} />
        </main>
      </div>
      <Footer />
    </>
  );
}
