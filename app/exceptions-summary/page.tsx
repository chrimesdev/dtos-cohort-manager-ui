import type { Metadata } from "next";
import BackLink from "../components/backLink";
import Header from "../components/header";
import Footer from "../components/footer";
import ExceptionsTable from "../components/exceptionsTable";
import { getData } from "../lib/api";

export const metadata: Metadata = {
  title: "Exceptions summary - Cohort Manager",
};

export default async function Home() {
  const exceptions = await getData("/api/exceptions");

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
