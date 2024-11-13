import type { Metadata } from "next";
import ExceptionsTable from "@/app/components/exceptionsTable";
import { getData } from "@/app/lib/api";

export const metadata: Metadata = {
  title: "Exceptions summary - Cohort Manager",
};

export default async function Page() {
  const exceptions = await getData("/api/exceptions");

  return (
    <>
      <h1>Exceptions summary</h1>
      <ExceptionsTable exceptions={exceptions} />
    </>
  );
}
