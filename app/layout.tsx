import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Cohort Manager",
  description: "UI for managing screening exceptions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="nhsuk-width-container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
