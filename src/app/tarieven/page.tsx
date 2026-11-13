import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import TarievenContent from "./TarievenContent";

export const metadata: Metadata = {
  title: `Tarieven: prijzen en pakketten | ${siteDetails.siteName}`,
  description: `Tarieven ${siteDetails.siteName}: het website-ontwerp is gratis en het bestand is van jou. Laten draaien vanaf €79 per maand.`,
  openGraph: {
    title: `Tarieven | ${siteDetails.siteName}`,
    description: `Het ontwerp is gratis en het bestand is van jou. Laten draaien vanaf €79 per maand.`,
    url: `${siteDetails.siteUrl}tarieven`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/og-image.jpg`, width: 1200, height: 630, alt: `Tarieven | ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tarieven | ${siteDetails.siteName}`,
    description: `Het ontwerp is gratis en het bestand is van jou. Laten draaien vanaf €79 per maand.`,
    images: [`${siteDetails.siteUrl}images/og-image.jpg`],
  },
  alternates: { canonical: `${siteDetails.siteUrl}tarieven` },
};

export default function TarievenPage() {
  return <TarievenContent />;
}
