import { NextResponse } from "next/server";
import type { ExceptionDetails } from "@/app/types";

const exceptionDetails: ExceptionDetails[] = [
  {
    exceptionId: 10001767,
    nhsNumber: "723 333 6897",
    dateCreated: "10th August 2024",
    shortDescription: "Possible duplicate",
  },
  {
    exceptionId: 10001768,
    nhsNumber: "723 333 6898",
    dateCreated: "11th August 2024",
    shortDescription: "Technical error - Invalid Gender for this cohort",
  },
  {
    exceptionId: 10001769,
    nhsNumber: "723 333 6899",
    dateCreated: "12th August 2024",
    shortDescription:
      "Technical error - NHS number was not supplied in a valid format",
  },
  {
    exceptionId: 10001770,
    nhsNumber: "723 333 6900",
    dateCreated: "13th August 2024",
    shortDescription: "Technical error - Invalid postcode",
  },
  {
    exceptionId: 10001771,
    nhsNumber: "723 333 6901",
    dateCreated: "14th August 2024",
    shortDescription:
      "Technical error - GP practice code (primary card provider) is mandatory for this update and was not supplied",
  },
  {
    exceptionId: 10001772,
    nhsNumber: "723 333 6902",
    dateCreated: "15th August 2024",
    shortDescription: "Technical error - Missing or invalid record type",
  },
  {
    exceptionId: 10001773,
    nhsNumber: "723 333 6903",
    dateCreated: "16th August 2024",
    shortDescription: "Technical error - Date of birth is invalid or missing",
  },
  {
    exceptionId: 10001774,
    nhsNumber: "723 333 6904",
    dateCreated: "17th August 2024",
    shortDescription:
      "Technical error - Received NHS number is on the PI blocked list",
  },
];

export async function GET() {
  return NextResponse.json(exceptionDetails, { status: 200 });
}
