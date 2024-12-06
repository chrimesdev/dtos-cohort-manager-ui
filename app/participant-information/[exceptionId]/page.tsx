import type { Metadata } from "next";
import { ExceptionDetails } from "@/app/types";
import { auth } from "@/app/lib/auth";
import { fetchExceptions } from "@/app/lib/fetchExceptions";
import { checkAccess } from "@/app/lib/checkAccess";
import Breadcrumb from "@/app/components/breadcrumb";
import ParticipantInformationPanel from "@/app/components/participantInformationPanel";
import Unauthorised from "@/app/components/unauthorised";

export const metadata: Metadata = {
  title: "Participant information - Cohort Manager",
};

export default async function Page(props: {
  params: Promise<{ exceptionId: string }>;
}) {
  const session = await auth();
  const isCohortManager = session?.user
    ? await checkAccess(session.user.uid)
    : false;

  if (!isCohortManager) {
    return <Unauthorised />;
  }

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
    const exception = await fetchExceptions(exceptionId);

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
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-full">
              <h1>Participant information</h1>
              <ParticipantInformationPanel
                exceptionDetails={exceptionDetails}
              />
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <h1>Participant information</h1>
              <p>
                Error loading participant information. Please try again later.
              </p>
              <p>
                Error:{" "}
                {error instanceof Error ? error.message : "Unknown error"}
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
}
