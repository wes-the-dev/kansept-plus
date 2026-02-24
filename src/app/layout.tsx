import type { Metadata } from "next";
import "./globals.css";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";

export const metadata: Metadata = {
  title: "Kansept Plus | Interior Design & Civil Works",
  description: "A premier interior design studio in Lagos, specializing in creating exceptional spaces through innovative design and quality civil works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body style={{ overflowX: "hidden" }}>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}
