import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import FreeTrialContent from "./FreeTrialContent";

export const metadata: Metadata = {
  title: `14 dagen voor €1 voor ${siteDetails.niche.toLowerCase()} | ${siteDetails.siteName}`,
  description: `Probeer ${siteDetails.siteName} 14 dagen voor €1: de AI-assistent neemt de telefoon op, plant afspraken en doet de administratie van ${siteDetails.niche.toLowerCase()}. Eenmalig €1, daarna pas beslissen.`,
  openGraph: {
    title: `Start je proefperiode: 14 dagen voor €1 | ${siteDetails.siteName}`,
    description: `Probeer ${siteDetails.siteName} 14 dagen voor €1: de AI-assistent neemt de telefoon op, plant afspraken en doet de administratie van ${siteDetails.niche.toLowerCase()}. Eenmalig €1, daarna pas beslissen.`,
    url: `${siteDetails.siteUrl}free-trial`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/og-image.jpg`, width: 1200, height: 630, alt: `Start je proefperiode: 14 dagen voor €1 | ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Start je proefperiode: 14 dagen voor €1 | ${siteDetails.siteName}`,
    description: `Probeer ${siteDetails.siteName} 14 dagen voor €1: de AI-assistent neemt de telefoon op, plant afspraken en doet de administratie van ${siteDetails.niche.toLowerCase()}. Eenmalig €1, daarna pas beslissen.`,
    images: [`${siteDetails.siteUrl}images/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}free-trial`,
  },
};

export default function FreeTrialPage() {
  return <FreeTrialContent />;
}
