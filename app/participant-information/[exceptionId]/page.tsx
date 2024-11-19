import type { Metadata } from "next";
import Breadcrumb from "@/app/components/breadcrumb";
import ParticipantInformationTabs from "@/app/components/participantInformationTabs";
import PatientBanner from "@/app/components/patientBanner";
import { ExceptionDetails } from "@/app/types";

export const metadata: Metadata = {
  title: "Participant information - Cohort Manager",
};

export default async function Page(props: {
  params: Promise<{ exceptionId: string }>;
}) {
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

  const params = await props.params;
  const exceptionId = Number(params.exceptionId);

  try {
    const data = await fetch(
      `${process.env.EXCEPTIONS_API_URL}/api/GetValidationExceptions?exceptionId=${exceptionId}`
    );
    if (!data.ok) {
      throw new Error(`Error fetching data: ${data.statusText}`);
    }
    const exception = await data.json();

    const exceptionDetails: ExceptionDetails = {
      exceptionId: exceptionId,
      dateCreated: exception.DateCreated,
      shortDescription: exception.RuleDescription,
      nhsNumber: exception.NhsNumber,
      name: `${exception.ExceptionDetails.GivenName} ${exception.ExceptionDetails.FamilyName}`,
      dateOfBirth: exception.ExceptionDetails.DateOfBirth,
      address: `${exception.ExceptionDetails.ParticipantAddressLine1}${
        exception.ExceptionDetails.ParticipantAddressLine2
          ? `, ${exception.ExceptionDetails.ParticipantAddressLine2}`
          : ""
      }${
        exception.ExceptionDetails.ParticipantAddressLine3
          ? `, ${exception.ExceptionDetails.ParticipantAddressLine3}`
          : ""
      }${
        exception.ExceptionDetails.ParticipantAddressLine4
          ? `, ${exception.ExceptionDetails.ParticipantAddressLine4}`
          : ""
      }${
        exception.ExceptionDetails.ParticipantAddressLine5
          ? `, ${exception.ExceptionDetails.ParticipantAddressLine5}`
          : ""
      }, ${exception.ExceptionDetails.ParticipantPostCode}`,
      contactDetails: {
        phoneNumber: exception.ExceptionDetails.TelephoneNumberHome,
        email: exception.ExceptionDetails.EmailAddressHome,
      },
      gpPracticeCode: exception.ExceptionDetails.GpPracticeCode,
    };

    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Participant information</h1>
          <PatientBanner
            participantName={exceptionDetails.name}
            nhsNumber={exceptionDetails.nhsNumber || ""}
          />
          <ParticipantInformationTabs exceptionDetails={exceptionDetails} />
        </main>
      </>
    );
  } catch (error) {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Participant information</h1>
          <p>Error loading participant information. Please try again later.</p>
          <p>
            Error: {error instanceof Error ? error.message : "Unknown error"}
          </p>
        </main>
      </>
    );
  }
}
