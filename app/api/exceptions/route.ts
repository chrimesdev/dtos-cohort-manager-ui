import { NextResponse } from "next/server";
import type { ExceptionDetails } from "@/app/types";

const exceptionDetails: ExceptionDetails[] = [
  {
    exceptionId: 123456,
    nhsNumber: "723 333 6897",
    dateCreated: "10th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
  {
    exceptionId: 123457,
    nhsNumber: "723 333 6898",
    dateCreated: "11th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
  {
    exceptionId: 123458,
    nhsNumber: "723 333 6899",
    dateCreated: "12th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
  {
    exceptionId: 123459,
    nhsNumber: "723 333 6900",
    dateCreated: "13th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
  {
    exceptionId: 123460,
    nhsNumber: "723 333 6901",
    dateCreated: "14th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
  {
    exceptionId: 123461,
    nhsNumber: "723 333 6902",
    dateCreated: "15th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
  {
    exceptionId: 123462,
    nhsNumber: "723 333 6903",
    dateCreated: "16th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
  {
    exceptionId: 123463,
    nhsNumber: "723 333 6904",
    dateCreated: "17th August 2024",
    description:
      "Requesting help with Breast screening service. Not related to failure or outage. NHS number transfer not updating participant recall status.",
    type: "Duplicate",
    service: "Breast screening",
    status: "Open",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(exceptionDetails, { status: 200 });
}
