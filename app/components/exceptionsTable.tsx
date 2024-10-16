"use client";

import Link from "next/link";
import { ExceptionDetails } from "../types";

interface ExceptionsTableProps {
  exceptions: ExceptionDetails[];
}

export default function ExceptionsTable({ exceptions }: ExceptionsTableProps) {
  return (
    <>
      <p>
        Showing {exceptions.length} results of {exceptions.length}
      </p>
      <table role="table" className="nhsuk-table-responsive">
        <thead role="rowgroup" className="nhsuk-table__head">
          <tr role="row">
            <th role="columnheader" scope="col">
              NHS number
            </th>
            <th role="columnheader" scope="col">
              Exception ID
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
            <th role="columnheader" scope="col">
              Status
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
              <td role="cell" className="nhsuk-table__cell app-u-no-wrap">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  NHS number{" "}
                </span>
                <Link
                  href={`/participant-information/${exception.exceptionId}`}
                >
                  {exception.nhsNumber}
                </Link>
              </td>
              <td role="cell" className="nhsuk-table__cell">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  Exception ID{" "}
                </span>
                {exception.exceptionId}
              </td>
              <td role="cell" className="nhsuk-table__cell">
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
                {exception.description}
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
              <td role="cell" className="nhsuk-table__cell">
                <span
                  className="nhsuk-table-responsive__heading"
                  aria-hidden="true"
                >
                  Status{" "}
                </span>
                <strong className="nhsuk-tag nhsuk-tag--blue">
                  {exception.status}
                </strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
