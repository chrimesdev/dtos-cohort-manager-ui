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
  const patientDetails = {
    nhsNumber: "723 333 6897",
    name: "John Doe",
    dateOfBirth: "1980-01-01",
    address: "123 Main St, Anytown, AT 12345",
    contactDetails: {
      phoneNumber: "01234 567890",
      email: "john.doe@example.com",
    },
    gpPractice: "Anytown Medical Centre",
    gpPracticeCode: "G12345",
  };

  const exceptionDetails = {
    exceptionId: 123456,
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
            participantName="Sandra Lewis"
            nhsNumber="723 333 6897"
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
