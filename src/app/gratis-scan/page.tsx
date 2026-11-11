import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import GratisScanContent from "./GratisScanContent";

export const metadata: Metadata = {
  title: `Gratis AI- en SEO-scan voor ${siteDetails.niche.toLowerCase()} | ${siteDetails.siteName}`,
  description: `Gratis scan voor ${siteDetails.niche.toLowerCase()}: een cijfer op SEO, conversie, AI-vindbaarheid en lokale signalen, plus de belangrijkste verbeterpunten in je inbox.`,
  openGraph: {
    title: `Gratis AI- en SEO-scan | ${siteDetails.siteName}`,
    description: `Gratis scan voor ${siteDetails.niche.toLowerCase()}: een cijfer op SEO, conversie, AI-vindbaarheid en lokale signalen, plus de belangrijkste verbeterpunten in je inbox.`,
    url: `${siteDetails.siteUrl}gratis-scan`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/og-image.jpg`, width: 1200, height: 630, alt: `Gratis AI- en SEO-scan | ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gratis AI- en SEO-scan | ${siteDetails.siteName}`,
    description: `Gratis scan voor ${siteDetails.niche.toLowerCase()}: een cijfer op SEO, conversie, AI-vindbaarheid en lokale signalen, plus de belangrijkste verbeterpunten in je inbox.`,
    images: [`${siteDetails.siteUrl}images/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}gratis-scan`,
  },
};

export default function GratisScanPage() {
  return <GratisScanContent />;
}
