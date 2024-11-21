export interface ExceptionsAPI {
  ExceptionId: number;
  NhsNumber: string;
  DateCreated: string;
  RuleDescription: string;
  ExceptionDetails: {
    GivenName: string;
    FamilyName: string;
    DateOfBirth: string;
    ParticipantAddressLine1: string;
    ParticipantAddressLine2: string;
    ParticipantAddressLine3: string;
    ParticipantAddressLine4: string;
    ParticipantAddressLine5: string;
    ParticipantPostCode: string;
    TelephoneNumberHome: string;
    EmailAddressHome: string;
    GpPracticeCode: string;
  };
}
