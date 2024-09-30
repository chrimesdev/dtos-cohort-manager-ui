import type { Metadata } from "next";
import CardGroup from "./components/cardGroup";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Overview - Cohort Manager",
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Overview</h1>
          <CardGroup />
        </main>
      </div>
      <Footer />
    </>
  );
}
