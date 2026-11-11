import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ReviewPakketContent from "./ReviewPakketContent";

export const metadata: Metadata = {
  title: `Reviewpakket voor ${siteDetails.niche.toLowerCase()} | ${siteDetails.siteName}`,
  description: `Meer 5-sterrenreviews op Google zonder erachteraan te bellen: NFC-kaartjes plus automatische review-verzoeken na elke klus, speciaal voor ${siteDetails.niche.toLowerCase()}.`,
  openGraph: {
    title: `Meer Google-reviews verzamelen | ${siteDetails.siteName}`,
    description: `Meer 5-sterrenreviews op Google zonder erachteraan te bellen: NFC-kaartjes plus automatische review-verzoeken na elke klus, speciaal voor ${siteDetails.niche.toLowerCase()}.`,
    url: `${siteDetails.siteUrl}review-pakket`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/services/review-pakket-hero.jpg`, width: 1376, height: 774, alt: `Meer Google-reviews verzamelen | ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Meer Google-reviews verzamelen | ${siteDetails.siteName}`,
    description: `Meer 5-sterrenreviews op Google zonder erachteraan te bellen: NFC-kaartjes plus automatische review-verzoeken na elke klus, speciaal voor ${siteDetails.niche.toLowerCase()}.`,
    images: [`${siteDetails.siteUrl}images/services/review-pakket-hero.jpg`],
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}review-pakket`,
  },
};

export default function ReviewPakketPage() {
  return <ReviewPakketContent />;
}
