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
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ overflowX: "hidden" }}>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}
