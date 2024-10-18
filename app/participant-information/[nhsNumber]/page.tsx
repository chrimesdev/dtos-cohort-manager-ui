import type { Metadata } from "next";
import BackLink from "../../components/backLink";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PatientBanner from "../../components/patientBanner";
import ParticipantInformationTabs from "../../components/participantInformationTabs";

export const metadata: Metadata = {
  title: "Participant information - Cohort Manager",
};

export default function Page({ params }: { params: { exceptionId: string } }) {
  const exceptionId = Number(params.exceptionId);

  const patientDetails = {
    nhsNumber: "723 333 6897",
    name: "John Doe",
    dateOfBirth: "1980-01-01",
    address: "123 Any street, Anytown, Anywhere LS14JT",
    contactDetails: {
      phoneNumber: "01234 567890",
      email: "john.doe@example.com",
    },
    gpPractice: "Anytown Medical Centre",
    gpPracticeCode: "G12345",
  };

  const exceptionDetails = {
    exceptionId: exceptionId,
    nhsNumber: "723 333 6897",
    dateCreated: "10th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Active",
  };
  return (
    <>
      <Header />
      <div className="nhsuk-width-container">
        <BackLink href="/exceptions-summary" />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Participant information</h1>
          <PatientBanner
            participantName={patientDetails.name}
            nhsNumber={patientDetails.nhsNumber}
          />
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
