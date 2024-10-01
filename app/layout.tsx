import type { Metadata } from "next";
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
      <body className="js-enabled">{children}</body>
    </html>
  );
}
