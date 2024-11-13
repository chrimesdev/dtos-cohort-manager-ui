import type { Metadata } from "next";
import CardGroup from "@/app/components/cardGroup";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default function Home() {
  return (
    <>
      <h1>Overview</h1>
      <CardGroup />
    </>
  );
}
