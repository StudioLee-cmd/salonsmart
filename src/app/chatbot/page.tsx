import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ChatbotContent from "./ChatbotContent";

export const metadata: Metadata = {
  title: `AI Chatbot voor ${siteDetails.niche} — ${siteDetails.siteName}`,
  description: `AI chatbot voor ${siteDetails.niche?.toLowerCase()} vangt klanten op, beantwoordt vragen en boekt afspraken — 24/7, ook buiten kantooruren.`,
  openGraph: {
    title: `AI Chatbot voor ${siteDetails.niche} — ${siteDetails.siteName}`,
    description: `Een AI chatbot voor ${siteDetails.niche?.toLowerCase()} vangt klanten op, beantwoordt vragen en boekt afspraken — 24/7.`,
    url: `${siteDetails.siteUrl}chatbot`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/services/chatbot-hero.jpg`, width: 1376, height: 774, alt: `AI Chatbot voor ${siteDetails.niche} — ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Chatbot voor ${siteDetails.niche} — ${siteDetails.siteName}`,
    description: `Een AI chatbot voor ${siteDetails.niche?.toLowerCase()} vangt klanten op, beantwoordt vragen en boekt afspraken — 24/7.`,
    images: [`${siteDetails.siteUrl}images/services/chatbot-hero.jpg`],
  },
  alternates: { canonical: `${siteDetails.siteUrl}chatbot` },
};

export default function ChatbotPage() {
  return <ChatbotContent />;
}
