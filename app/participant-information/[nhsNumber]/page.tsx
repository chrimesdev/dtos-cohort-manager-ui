import type { Metadata } from "next";
import BackLink from "../../components/backLink";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PatientBanner from "../../components/patientBanner";

export const metadata: Metadata = {
  title: "Participant information - Cohort Manager",
};

export default function Page({ params }: { params: { nhsNumber: string } }) {
  const { nhsNumber } = params;
  return (
    <>
      <Header />
      <div className="nhsuk-width-container">
        <BackLink href="/exceptions-summary" />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Participant information</h1>
          <PatientBanner participantName="Sandra Lewis" nhsNumber={nhsNumber} />
        </main>
      </div>
      <Footer />
    </>
  );
}
