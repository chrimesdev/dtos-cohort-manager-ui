import { NextResponse } from "next/server";
import { ExceptionAPIDetails } from "@/app/types/exceptionsApi";
import { getCurrentDate } from "@/app/lib/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const exceptionId = searchParams.get("exceptionId");
  const today = getCurrentDate();

  if (exceptionId) {
    const exception: ExceptionAPIDetails = {
      NhsNumber: "9437207461",
      DateCreated: `${today}T15:15:03.657`,
      RuleDescription: "Invalid primary care provider GP practice code.",
      ExceptionDetails: {
        GivenName: "Ava",
        FamilyName: "Cluley",
        DateOfBirth: "19930226",
        ParticipantAddressLine1: "11 Stanhope Road",
        ParticipantAddressLine2: "London",
        ParticipantPostCode: "E17 9QT",
        TelephoneNumberHome: "011 1111 1111",
        EmailAddressHome: "ava.cluley@example.com",
        GpPracticeCode: "Y00211",
        ParticipantAddressLine3: "",
        ParticipantAddressLine4: "",
        ParticipantAddressLine5: "",
      },
      ExceptionId: 0,
    };
    return NextResponse.json(exception, { status: 200 });
  }

  return NextResponse.json(
    {
      Items: [
        {
          ExceptionId: 2063,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9437207461",
          DateCreated: `${today}T15:15:03.657`,
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "Invalid primary care provider GP practice code.",
          ErrorRecord:
            '{"RecordType":"ADD","ChangeTimeStamp":null,"SerialChangeNumber":null,"NhsNumber":"9437207461","SupersededByNhsNumber":null,"PrimaryCareProvider":"Y00211","PrimaryCareProviderEffectiveFromDate":"19930501","CurrentPosting":"SUN","CurrentPostingEffectiveFromDate":"19811221","NamePrefix":"MRS","FirstName":"AVA","OtherGivenNames":"ESTELLA","FamilyName":"CLULEY","PreviousFamilyName":null,"DateOfBirth":"19680328","Gender":2,"AddressLine1":"11 STANHOPE ROAD","AddressLine2":"LONDON","AddressLine3":null,"AddressLine4":null,"AddressLine5":null,"Postcode":"E17 9QT","PafKey":"3169441","UsualAddressEffectiveFromDate":"20090219","ReasonForRemoval":"","ReasonForRemovalEffectiveFromDate":"","DateOfDeath":null,"DeathStatus":null,"TelephoneNumber":null,"TelephoneNumberEffectiveFromDate":null,"MobileNumber":null,"MobileNumberEffectiveFromDate":null,"EmailAddress":null,"EmailAddressEffectiveFromDate":null,"PreferredLanguage":null,"IsInterpreterRequired":"0","InvalidFlag":"0","ParticipantId":null,"ScreeningId":"1","BusinessRuleVersion":null,"ExceptionFlag":"Y","RecordInsertDateTime":"01/07/2025 15:12:43","RecordUpdateDateTime":null,"ScreeningAcronym":null,"ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2064,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9732367741",
          DateCreated: "2025-01-07T15:15:03.583",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "The operation has timed out.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9732367741","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2065,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9732368012",
          DateCreated: "2025-01-07T15:15:04.603",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "CurrentPostingAndPrimaryProvider",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9732368012","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2066,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9453624764",
          DateCreated: "2025-01-07T15:15:04.937",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "Missing or invalid Posting",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9453624764","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2067,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9430146556",
          DateCreated: "2025-01-07T15:15:05.007",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "Invalid primary care provider GP practice code",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9430146556","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2068,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9454528831",
          DateCreated: "2025-01-07T15:15:05.143",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription:
            "Object reference not set to an instance of an object.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9454528831","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2069,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9732367725",
          DateCreated: "2025-01-07T15:15:05.167",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "The operation has timed out.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9732367725","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2070,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9454616900",
          DateCreated: "2025-01-07T15:15:05.22",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "CurrentPostingAndPrimaryProvider",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9454616900","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2071,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9650245286",
          DateCreated: "2025-01-07T15:15:05.407",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "Missing or invalid Posting.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9650245286","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2072,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9446520177",
          DateCreated: "2025-01-07T15:15:05.407",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription:
            "Object reference not set to an instance of an object.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9446520177","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2073,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9732367725",
          DateCreated: "2025-01-07T15:15:05.53",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription:
            "Object reference not set to an instance of an object.",
          ErrorRecord:
            '{"RecordType":"ADD","ChangeTimeStamp":null,"SerialChangeNumber":null,"NhsNumber":"9732367725","SupersededByNhsNumber":null,"PrimaryCareProvider":"000014","PrimaryCareProviderEffectiveFromDate":"19731209","CurrentPosting":"LDS","CurrentPostingEffectiveFromDate":"20240619","NamePrefix":"MRS","FirstName":"DEBRA","OtherGivenNames":"JANET","FamilyName":"WATSON","PreviousFamilyName":null,"DateOfBirth":"19640512","Gender":2,"AddressLine1":"39 BELGRAVE ROAD","AddressLine2":"KEIGHLEY","AddressLine3":"W YORKSHIRE","AddressLine4":null,"AddressLine5":null,"Postcode":"BD21 2HL","PafKey":null,"UsualAddressEffectiveFromDate":"19820328","ReasonForRemoval":"","ReasonForRemovalEffectiveFromDate":"","DateOfDeath":null,"DeathStatus":null,"TelephoneNumber":null,"TelephoneNumberEffectiveFromDate":null,"MobileNumber":null,"MobileNumberEffectiveFromDate":null,"EmailAddress":null,"EmailAddressEffectiveFromDate":null,"PreferredLanguage":"cs","IsInterpreterRequired":"1","InvalidFlag":"0","ParticipantId":null,"ScreeningId":"1","BusinessRuleVersion":null,"ExceptionFlag":"Y","RecordInsertDateTime":"01/07/2025 15:12:43","RecordUpdateDateTime":null,"ScreeningAcronym":null,"ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2074,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9686186158",
          DateCreated: "2025-01-07T15:15:05.537",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "CurrentPostingAndPrimaryProvider",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9686186158","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2075,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9686196579",
          DateCreated: "2025-01-07T15:15:05.58",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "Missing or invalid Posting.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9686196579","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2076,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9900044010",
          DateCreated: "2025-01-07T15:15:05.82",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "Invalid primary care provider GP practice code.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9900044010","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2077,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9900044010",
          DateCreated: "2025-01-07T15:15:06",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "CurrentPostingAndPrimaryProvider.",
          ErrorRecord:
            '{"RecordType":"ADD","ChangeTimeStamp":null,"SerialChangeNumber":null,"NhsNumber":"9900044010","SupersededByNhsNumber":null,"PrimaryCareProvider":"Y90076","PrimaryCareProviderEffectiveFromDate":"20080514","CurrentPosting":"GMK","CurrentPostingEffectiveFromDate":"20081010","NamePrefix":"MISS","FirstName":"COMMISSION","OtherGivenNames":null,"FamilyName":"XXTESTPATIENTCBXB","PreviousFamilyName":null,"DateOfBirth":"19690615","Gender":2,"AddressLine1":"c/o NPfIT Test Data Mgr","AddressLine2":"Princes Exchange","AddressLine3":"Princes Square","AddressLine4":"Leeds","AddressLine5":"West Yorkshire","Postcode":"LS1 4HY","PafKey":null,"UsualAddressEffectiveFromDate":"20080514","ReasonForRemoval":"","ReasonForRemovalEffectiveFromDate":"","DateOfDeath":null,"DeathStatus":null,"TelephoneNumber":null,"TelephoneNumberEffectiveFromDate":null,"MobileNumber":null,"MobileNumberEffectiveFromDate":null,"EmailAddress":null,"EmailAddressEffectiveFromDate":null,"PreferredLanguage":null,"IsInterpreterRequired":"0","InvalidFlag":"0","ParticipantId":null,"ScreeningId":"1","BusinessRuleVersion":null,"ExceptionFlag":"Y","RecordInsertDateTime":"01/07/2025 15:12:43","RecordUpdateDateTime":null,"ScreeningAcronym":null,"ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2078,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9731994556",
          DateCreated: "2025-01-07T15:15:06.057",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "The operation has timed out.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9731994556","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2079,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9450465762",
          DateCreated: "2025-01-07T15:15:06.093",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription:
            "Object reference not set to an instance of an object.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9450465762","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2080,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9450465762",
          DateCreated: "2025-01-07T15:15:06.25",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription:
            "Object reference not set to an instance of an object.",
          ErrorRecord:
            '{"RecordType":"ADD","ChangeTimeStamp":null,"SerialChangeNumber":null,"NhsNumber":"9450465762","SupersededByNhsNumber":null,"PrimaryCareProvider":"B82623","PrimaryCareProviderEffectiveFromDate":"20100103","CurrentPosting":"SUN","CurrentPostingEffectiveFromDate":"19680725","NamePrefix":null,"FirstName":"TEAL","OtherGivenNames":null,"FamilyName":"FINNEY","PreviousFamilyName":null,"DateOfBirth":"19630604","Gender":2,"AddressLine1":"15 Howard Road","AddressLine2":"Malton","AddressLine3":null,"AddressLine4":null,"AddressLine5":null,"Postcode":"YO32 0KJ","PafKey":null,"UsualAddressEffectiveFromDate":"20120105","ReasonForRemoval":"","ReasonForRemovalEffectiveFromDate":"","DateOfDeath":null,"DeathStatus":null,"TelephoneNumber":null,"TelephoneNumberEffectiveFromDate":null,"MobileNumber":null,"MobileNumberEffectiveFromDate":null,"EmailAddress":null,"EmailAddressEffectiveFromDate":null,"PreferredLanguage":null,"IsInterpreterRequired":"0","InvalidFlag":"0","ParticipantId":null,"ScreeningId":"1","BusinessRuleVersion":null,"ExceptionFlag":"Y","RecordInsertDateTime":"01/07/2025 15:12:44","RecordUpdateDateTime":null,"ScreeningAcronym":null,"ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2081,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9453626368",
          DateCreated: "2025-01-07T15:15:06.7",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription:
            "Object reference not set to an instance of an object.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9453626368","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 2082,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9731994009",
          DateCreated: "2025-01-07T15:15:06.707",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "The operation has timed out.",
          ErrorRecord:
            '{"RecordType":"ADD","NhsNumber":"9731994009","RemovalReason":"","RemovalEffectiveFromDate":"","ScreeningId":"1","ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
        {
          ExceptionId: 368,
          FileName: "ADD_500_2_-_CAAS_BREAST_SCREENING_COHORT.parquet",
          NhsNumber: "9437207461",
          DateCreated: "2025-01-07T15:15:06.707",
          DateResolved: "2025-01-07T00:00:00",
          RuleId: -2147467261,
          RuleDescription: "Invalid primary care provider  GP practice code.",
          ErrorRecord:
            '{"RecordType":"ADD","ChangeTimeStamp":null,"SerialChangeNumber":null,"NhsNumber":"9437207461","SupersededByNhsNumber":null,"PrimaryCareProvider":"Y00211","PrimaryCareProviderEffectiveFromDate":"19930501","CurrentPosting":"SUN","CurrentPostingEffectiveFromDate":"19811221","NamePrefix":"MRS","FirstName":"AVA","OtherGivenNames":"ESTELLA","FamilyName":"CLULEY","PreviousFamilyName":null,"DateOfBirth":"19680328","Gender":2,"AddressLine1":"11 STANHOPE ROAD","AddressLine2":"LONDON","AddressLine3":null,"AddressLine4":null,"AddressLine5":null,"Postcode":"E17 9QT","PafKey":"3169441","UsualAddressEffectiveFromDate":"20090219","ReasonForRemoval":"","ReasonForRemovalEffectiveFromDate":"","DateOfDeath":null,"DeathStatus":null,"TelephoneNumber":null,"TelephoneNumberEffectiveFromDate":null,"MobileNumber":null,"MobileNumberEffectiveFromDate":null,"EmailAddress":null,"EmailAddressEffectiveFromDate":null,"PreferredLanguage":null,"IsInterpreterRequired":"0","InvalidFlag":"0","ParticipantId":null,"ScreeningId":"1","BusinessRuleVersion":null,"ExceptionFlag":"Y","RecordInsertDateTime":"01/07/2025 15:12:43","RecordUpdateDateTime":null,"ScreeningAcronym":null,"ScreeningName":"Breast Screening","EligibilityFlag":"1"}',
          Category: 5,
          ScreeningName: "Breast Screening",
          ExceptionDate: "2025-01-07T00:00:00",
          CohortName: "",
          Fatal: 1,
          ExceptionDetails: null,
        },
      ],
      IsFirstPage: true,
      HasNextPage: true,
      LastResultId: 2082,
      TotalItems: 2139,
      TotalPages: 107,
      CurrentPage: 1,
    },
    { status: 200 }
  );
}
