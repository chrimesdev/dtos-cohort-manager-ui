export type ExceptionDetails = {
  exceptionId: number;
  nhsNumber: string;
  dateCreated: string;
  description: string;
  type: string;
  service: string;
  status: string;
};

export type PatientDetails = {
  name: string;
  dateOfBirth: string;
  nhsNumber: string;
  address: string;
  contactDetails: {
    phoneNumber: string;
    email: string;
  };
  gpPractice: string;
  gpPracticeCode: string;
};
