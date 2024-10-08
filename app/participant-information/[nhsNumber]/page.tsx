import type { Metadata } from "next";
import BackLink from "../../components/backLink";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PatientBanner from "../../components/patientBanner";
import ParticipantInformationTabs from "../../components/participantInformationTabs";

export const metadata: Metadata = {
  title: "Participant information - Cohort Manager",
};

export default function Page({ params }: { params: { nhsNumber: string } }) {
  const { nhsNumber } = params;

  const patientDetails = {
    name: "Sandra Lewis",
    dateOfBirth: "15 March 1984",
    nhsNumber: "723 333 6897",
    contactInformation: "73 Roman Rd, Leeds, LS2 5ZN",
    contactDetails: {
      phone: "07700 900362",
      email: "sandra.lewis@example.com",
    },
    gpPractice: "GP medical centre, Nottingham Forest, Nottingham, N21 45T",
    gpPracticeCode: "B86110",
  };

  const exceptionDetails = {
    dateCreated: "10th August 2024",
    service: "Breast screening",
    dateRaisedWithNBO: "12th August 2024",
    status: "Active",
    shortDescription:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
  };

  return (
    <>
      <Header />
      <div className="nhsuk-width-container">
        <BackLink href="/exceptions-summary" />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Participant information</h1>
          <PatientBanner participantName="Sandra Lewis" nhsNumber={nhsNumber} />
          <ParticipantInformationTabs
            patientDetails={patientDetails}
            exceptionDetails={exceptionDetails}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
