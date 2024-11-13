export type ExceptionDetails = {
  exceptionId: number;
  nhsNumber: string;
  dateCreated: string;
  shortDescription: string;
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
  gpPracticeCode?: string;
};
