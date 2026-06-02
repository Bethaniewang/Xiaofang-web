import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Side By Side Counseling & Consulting",
    template: "%s",
  },
  description:
    "Bilingual counseling, immigration psychological evaluations, therapy, and consulting services in Maryland, Virginia, and Washington, D.C.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
