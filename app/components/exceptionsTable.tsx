"use client";

import Link from "next/link";
import { ExceptionDetails } from "@/app/types";

interface ExceptionsTableProps {
  exceptions: ExceptionDetails[];
}

export default function ExceptionsTable({ exceptions }: ExceptionsTableProps) {
  return (
    <>
      <table role="table" className="nhsuk-table-responsive">
        <caption className="nhsuk-table__caption nhsuk-u-visually-hidden">
          Open breast screening exceptions
        </caption>
        <thead role="rowgroup" className="nhsuk-table__head">
          <tr role="row">
            <th role="columnheader" scope="col">
              Exception ID
            </th>
            <th role="columnheader" scope="col">
              NHS number
            </th>
            <th role="columnheader" scope="col">
              Date created
            </th>
            <th role="columnheader" scope="col">
              Short description
            </th>
            <th role="columnheader" scope="col">
              Screening service
            </th>
          </tr>
        </thead>
        <tbody className="nhsuk-table__body">
          {exceptions.map((exception) => (
            <tr
              role="row"
              className="nhsuk-table__row"
              key={exception.exceptionId}
            >
              <td role="cell" className="nhsuk-table__cell">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  Exception ID{" "}
                </span>
                <Link
                  href={`/participant-information/${exception.exceptionId}`}
                >
                  {exception.exceptionId}
                </Link>
              </td>
              <td role="cell" className="nhsuk-table__cell app-u-no-wrap">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  NHS number{" "}
                </span>
                {exception.nhsNumber}
              </td>
              <td role="cell" className="nhsuk-table__cell app-u-no-wrap">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  Date created{" "}
                </span>
                {exception.dateCreated}
              </td>
              <td role="cell" className="nhsuk-table__cell">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  Short description{" "}
                </span>
                {exception.shortDescription}
              </td>
              <td role="cell" className="nhsuk-table__cell">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  Screening service{" "}
                </span>
                {exception.service}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
