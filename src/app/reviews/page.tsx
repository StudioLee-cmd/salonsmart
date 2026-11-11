import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ReviewsContent from "./ReviewsContent";

const niche = 'salon';
const nichePlural = 'salons';

export const metadata: Metadata = {
  title: `Review Management voor ${nichePlural} | ${siteDetails.siteName}`,
  description: `Google reviews verzamelen als ${niche}? Automatische review requests via WhatsApp, NFC-kaarten en slimme software. Meer sterren, meer klanten.`,
  openGraph: {
    title: `Review Management voor ${nichePlural} | ${siteDetails.siteName}`,
    description: `Automatisch 5-sterren reviews verzamelen als ${niche}. WhatsApp requests, NFC-kaarten en Google Business integratie.`,
    url: `${siteDetails.siteUrl}reviews`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/services/reviews-hero.jpg`, width: 1376, height: 774, alt: `Review Management voor ${nichePlural} | ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Review Management voor ${nichePlural} | ${siteDetails.siteName}`,
    description: `Automatisch 5-sterren reviews verzamelen als ${niche}. WhatsApp requests, NFC-kaarten en Google Business integratie.`,
    images: [`${siteDetails.siteUrl}images/services/reviews-hero.jpg`],
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}reviews`,
  },
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
