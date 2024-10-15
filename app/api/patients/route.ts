import { NextResponse } from "next/server";
import type { PatientDetails } from "@/app/types";

const patientDetails: PatientDetails[] = [
  {
    nhsNumber: "723 333 6897",
    name: "John Doe",
    dateOfBirth: "1980-01-01",
    address: "123 Main St, Anytown, AT 12345",
    contactDetails: {
      phoneNumber: "01234 567890",
      email: "john.doe@example.com",
    },
    gpPractice: "Anytown Medical Centre",
    gpPracticeCode: "G12345",
  },
  {
    nhsNumber: "723 333 6898",
    name: "Jane Smith",
    dateOfBirth: "1985-02-02",
    address: "456 Elm St, Othertown, OT 67890",
    contactDetails: {
      phoneNumber: "09876 543210",
      email: "jane.smith@example.com",
    },
    gpPractice: "Othertown Health Centre",
    gpPracticeCode: "G67890",
  },
  {
    nhsNumber: "723 333 6899",
    name: "Alice Johnson",
    dateOfBirth: "1990-03-03",
    address: "789 Oak St, Sometown, ST 11223",
    contactDetails: {
      phoneNumber: "01122 334455",
      email: "alice.johnson@example.com",
    },
    gpPractice: "Othertown Health Centre",
    gpPracticeCode: "G67890",
  },
  {
    nhsNumber: "723 333 6900",
    name: "Bob Brown",
    dateOfBirth: "1975-04-04",
    address: "101 Pine St, Anycity, AC 44556",
    contactDetails: {
      phoneNumber: "02233 445566",
      email: "bob.brown@example.com",
    },
    gpPractice: "Othertown Health Centre",
    gpPracticeCode: "G67890",
  },
  {
    nhsNumber: "723 333 6901",
    name: "Charlie Davis",
    dateOfBirth: "1988-05-05",
    address: "202 Maple St, Othercity, OC 77889",
    contactDetails: {
      phoneNumber: "03344 556677",
      email: "charlie.davis@example.com",
    },
    gpPractice: "Othertown Health Centre",
    gpPracticeCode: "G67890",
  },
  {
    nhsNumber: "723 333 6902",
    name: "Diana Evans",
    dateOfBirth: "1992-06-06",
    address: "303 Birch St, Somecity, SC 99000",
    contactDetails: {
      phoneNumber: "04455 667788",
      email: "diana.evans@example.com",
    },
    gpPractice: "Othertown Health Centre",
    gpPracticeCode: "G67890",
  },
  {
    nhsNumber: "723 333 6903",
    name: "Edward Foster",
    dateOfBirth: "1983-07-07",
    address: "404 Cedar St, Anyville, AV 22334",
    contactDetails: {
      phoneNumber: "01234 567890",
      email: "edward.foster@example.com",
    },
    gpPractice: "Anytown Medical Centre",
    gpPracticeCode: "G12345",
  },
  {
    nhsNumber: "723 333 6904",
    name: "Fiona Green",
    dateOfBirth: "1995-08-08",
    address: "505 Walnut St, Otherville, OV 55667",
    contactDetails: {
      phoneNumber: "06677 889900",
      email: "fiona.green@example.com",
    },
    gpPractice: "Othertown Health Centre",
    gpPracticeCode: "G67890",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(patientDetails, { status: 200 });
}
