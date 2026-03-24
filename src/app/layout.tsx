import type { Metadata } from "next";
import "./globals.css";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";

const siteUrl = "https://www.kanseptplus.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kansept Plus | Interior Designers in Lagos, Nigeria",
    template: "%s | Kansept Plus",
  },
  description:
    "Kansept Plus is a premier interior design and civil works studio in Lagos, Nigeria. We create exceptional residential and commercial spaces in Ikoyi, Victoria Island, Lekki, and across Lagos.",
  keywords: [
    "interior designer Lagos",
    "interior design Lagos Nigeria",
    "interior design company Lagos",
    "interior designers in Lagos Nigeria",
    "interior design Ikoyi Lagos",
    "interior design Victoria Island Lagos",
    "interior design Lekki Lagos",
    "residential interior design Lagos",
    "commercial interior design Lagos",
    "civil works Lagos",
    "renovation Lagos Nigeria",
    "Kansept Plus",
    "Kansept",
    "interior design studio Lagos",
    "home decoration Lagos",
    "project management Lagos",
  ],
  authors: [{ name: "Kansept Plus", url: siteUrl }],
  creator: "Kansept Plus",
  publisher: "Kansept Plus",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Kansept Plus",
    title: "Kansept Plus | Interior Designers in Lagos, Nigeria",
    description:
      "Premier interior design and civil works studio in Lagos, Nigeria. Creating exceptional spaces through innovative design.",
    images: [
      {
        // Replace /images/og-image.jpg with your logo file once added to /public/images/
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kansept Plus — Interior Design Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansept Plus | Interior Designers in Lagos, Nigeria",
    description:
      "Premier interior design and civil works studio in Lagos, Nigeria.",
    images: ["/images/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Kansept Plus",
  alternateName: ["Kansept", "Kansept Plus Interior Design"],
  description:
    "Premier interior design and civil works studio in Lagos, Nigeria. Specialising in residential and commercial interior design, renovations, project management, and structural works.",
  url: siteUrl,
  logo: `${siteUrl}/images/og-image.jpg`,
  image: `${siteUrl}/images/hero-home.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ikoyi",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.4411,
    longitude: 3.4327,
  },
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Country", name: "Nigeria" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Design Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovations & Remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structural Works & Engineering" } },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ overflowX: "hidden" }}>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}
