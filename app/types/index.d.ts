export type ExceptionDetails = {
  exceptionId: number;
  dateCreated: string;
  shortDescription: string;
  nhsNumber?: string;
  name: string;
  dateOfBirth?: string;
  address?: string;
  contactDetails?: {
    phoneNumber?: string;
    email?: string;
  };
  gpPracticeCode?: string;
};

declare module "next-auth" {
  interface User {
    firstName?: string;
    lastName?: string;
    sub?: string;
    sid?: string;
    odsCode?: string;
    orgName?: string;
    roles?: string;
  }
}

export interface DecodedCIS2Token {
  iss: string;
  aud: string;
  idassurancelevel: string;
  authentication_assurance_level: string;
}
