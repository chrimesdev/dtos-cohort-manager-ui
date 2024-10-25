import { PatientDetails, ExceptionDetails } from "@/app//types";
import NHSUKJavaScript from "@/app/components/_nhsukJavaScript";

interface ParticipantInformationTabsProps {
  patientDetails: PatientDetails;
  exceptionDetails: ExceptionDetails;
}

export default function ParticipantInformationTabs({
  patientDetails,
  exceptionDetails,
}: ParticipantInformationTabsProps) {
  return (
    <>
      <NHSUKJavaScript />
      <div className="nhsuk-tabs" data-module="nhsuk-tabs">
        <h2 className="nhsuk-tabs__title">Contents</h2>
        <ul className="nhsuk-tabs__list">
          <li className="nhsuk-tabs__list-item nhsuk-tabs__list-item--selected">
            <a className="nhsuk-tabs__tab" href="#personal-details">
              Personal details
            </a>
          </li>
          <li className="nhsuk-tabs__list-item">
            <a className="nhsuk-tabs__tab" href="#exception-details">
              Exception details
            </a>
          </li>
        </ul>

        <div className="nhsuk-tabs__panel" id="personal-details">
          <h3>Personal details</h3>
          <dl className="nhsuk-summary-list">
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Name</dt>
              <dd className="nhsuk-summary-list__value">
                {patientDetails.name}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Date of birth</dt>
              <dd className="nhsuk-summary-list__value">
                {patientDetails.dateOfBirth}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">NHS number</dt>
              <dd className="nhsuk-summary-list__value">
                {patientDetails.nhsNumber}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Contact information</dt>
              <dd className="nhsuk-summary-list__value">
                {patientDetails.address}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Contact details</dt>
              <dd className="nhsuk-summary-list__value">
                <p>{patientDetails.contactDetails?.phoneNumber}</p>
                <p>{patientDetails.contactDetails?.email}</p>
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">GP practice</dt>
              <dd className="nhsuk-summary-list__value">
                {patientDetails.gpPractice}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">GP practice code</dt>
              <dd className="nhsuk-summary-list__value">
                {patientDetails.gpPracticeCode}
              </dd>
            </div>
          </dl>
        </div>

        <div
          className="nhsuk-tabs__panel nhsuk-tabs__panel--hidden"
          id="exception-details"
        >
          <h3>Exception details</h3>
          <dl className="nhsuk-summary-list">
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Date created</dt>
              <dd className="nhsuk-summary-list__value">
                {exceptionDetails.dateCreated}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Short description</dt>
              <dd className="nhsuk-summary-list__value">
                {exceptionDetails.shortDescription}
              </dd>
            </div>
            <div className="nhsuk-summary-list__row">
              <dt className="nhsuk-summary-list__key">Type</dt>
              <dd className="nhsuk-summary-list__value">
                {exceptionDetails.type}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
