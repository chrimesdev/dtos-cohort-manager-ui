export type ExceptionDetails = {
  exceptionId: number;
  nhsNumber: string;
  dateCreated: string;
  dateRaisedWithNBO?: string;
  shortDescription:
    | "Technical error - NHS number was not supplied in a valid format"
    | "Technical error - Missing or invalid record type"
    | "Technical error - Received NHS number is on the PI blocked list"
    | "Technical error - Missing or invalid previous posting"
    | "Technical error - Invalid Gender for this cohort"
    | "Technical error - Invalid postcode"
    | "Technical error - Date of birth is invalid or missing"
    | "Technical error - GP practice code (primary card provider) is mandatory for this update and was not supplied"
    | "Technical error - An illegal character was found, check name, address, telephone number and email address"
    | "Possible duplicate";
  type: string;
  service: string;
  status?: "Open" | "Closed";
};

export type PatientDetails = {
  nhsNumber: string;
  name: string;
  dateOfBirth?: string;
  address?: string;
  contactDetails?: {
    phoneNumber?: string;
    email?: string;
  };
  gpPractice?: string;
  gpPracticeCode?: string;
};
