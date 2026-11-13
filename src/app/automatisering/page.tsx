import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import AutomatiseringContent from "./AutomatiseringContent";

export const metadata: Metadata = {
  title: `Workflow automatisering voor ${siteDetails.niche} | ${siteDetails.siteName}`,
  description: `Workflow automatisering voor ${siteDetails.niche?.toLowerCase()}: automatische herinneringen, lead-opvolging, klantcommunicatie en custom flows. Geen no-shows, geen vergeten taken, geen handmatig werk.`,
  openGraph: {
    title: `Workflow automatisering voor ${siteDetails.niche} | ${siteDetails.siteName}`,
    description: `Automatische herinneringen, lead-opvolging en klantcommunicatie voor ${siteDetails.niche?.toLowerCase()}: laat het systeem het werk doen.`,
    url: `${siteDetails.siteUrl}automatisering`,
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: `${siteDetails.siteUrl}images/services/automatisering-hero.jpg`,
        width: 1376,
        height: 768,
        alt: `Workflow automatisering voor ${siteDetails.niche?.toLowerCase()}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Workflow automatisering voor ${siteDetails.niche} | ${siteDetails.siteName}`,
    description: `Automatische herinneringen, lead-opvolging en klantcommunicatie voor ${siteDetails.niche?.toLowerCase()}: laat het systeem het werk doen.`,
    images: [`${siteDetails.siteUrl}images/services/automatisering-hero.jpg`],
  },
  alternates: { canonical: `${siteDetails.siteUrl}automatisering` },
};

export default function AutomatiseringPage() {
  return <AutomatiseringContent />;
}
