import type { Metadata } from "next";
import CardGroup from "@/app/components/cardGroup";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default function Home() {
  return (
    <main className="nhsuk-main-wrapper" id="maincontent" role="main">
      <h1>Overview</h1>
      <CardGroup />
    </main>
  );
}
