import type { Metadata } from "next";
import Breadcrumb from "@/app/components/breadcrumb";
import ParticipantInformationTabs from "@/app/components/participantInformationTabs";
import PatientBanner from "@/app/components/patientBanner";
import { ExceptionDetails, PatientDetails } from "@/app/types";

export const metadata: Metadata = {
  title: "Participant information - Cohort Manager",
};

export default async function Page(props: {
  params: Promise<{ exceptionId: string }>;
}) {
  const params = await props.params;
  const exceptionId = Number(params.exceptionId);

  const patientDetails: PatientDetails = {
    nhsNumber: "723 333 6897",
    name: "John Doe",
    dateOfBirth: "1980-01-01",
    address: "123 Any street, Anytown, Anywhere LS14JT",
    contactDetails: {
      phoneNumber: "01234 567890",
      email: "john.doe@example.com",
    },
    gpPracticeCode: "G12345",
  };

  const exceptionDetails: ExceptionDetails = {
    exceptionId: exceptionId,
    nhsNumber: "723 333 6897",
    dateCreated: "10th August 2024",
    shortDescription:
      "Technical error - An illegal character was found, check name, address, telephone number and email address",
  };

  const breadcrumbItems = [
    {
      label: "Overview",
      url: "/",
    },
    {
      label: "Exceptions summary",
      url: "/exceptions-summary",
    },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
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
    </>
  );
}
