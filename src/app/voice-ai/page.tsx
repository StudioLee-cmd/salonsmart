import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import VoiceAIContent from "./VoiceAIContent";

export const metadata: Metadata = {
  title: `Voice AI Telefonist voor ${siteDetails.niche} — ${siteDetails.siteName}`,
  description: `Voice AI telefonist voor ${siteDetails.niche?.toLowerCase()}: beantwoordt oproepen, plant afspraken en stuurt WhatsApp-samenvattingen — 24/7.`,
  openGraph: {
    title: `Voice AI Telefonist voor ${siteDetails.niche} — ${siteDetails.siteName}`,
    description: `Een Voice AI telefonist voor ${siteDetails.niche?.toLowerCase()} beantwoordt elke oproep en plant afspraken — 24/7.`,
    url: `${siteDetails.siteUrl}voice-ai`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/services/voice-ai-hero.jpg`, width: 1376, height: 774, alt: `Voice AI Telefonist voor ${siteDetails.niche} — ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Voice AI Telefonist voor ${siteDetails.niche} — ${siteDetails.siteName}`,
    description: `Een Voice AI telefonist voor ${siteDetails.niche?.toLowerCase()} beantwoordt elke oproep en plant afspraken — 24/7.`,
    images: [`${siteDetails.siteUrl}images/services/voice-ai-hero.jpg`],
  },
  alternates: { canonical: `${siteDetails.siteUrl}voice-ai` },
};

export default function VoiceAIPage() {
  return <VoiceAIContent />;
}
