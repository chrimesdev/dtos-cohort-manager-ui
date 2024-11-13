import type { Metadata } from "next";
import CardGroup from "@/app/components/cardGroup";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default function Home() {
  const cards = [
    {
      value: 72,
      label: "Breast screening exceptions",
      url: "/exceptions-summary",
    },
    { value: 23, label: "Duplicate NHS numbers", url: "#" },
    { value: 22, label: "Confused NHS numbers", url: "#" },
  ];

  return (
    <main className="nhsuk-main-wrapper" id="maincontent" role="main">
      <h1>Overview</h1>
      <CardGroup items={cards} />
    </main>
  );
}
