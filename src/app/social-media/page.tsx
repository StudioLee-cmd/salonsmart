import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SocialMediaContent from "./SocialMediaContent";

const niche = 'salon';
const nichePlural = 'salons';

export const metadata: Metadata = {
  title: `Social Media voor ${nichePlural} | ${siteDetails.siteName}`,
  description: `Social media voor ${nichePlural}: content planning, AI-posts en automatische scheduling. Inclusief consulting en analyse.`,
  openGraph: {
    title: `Social Media voor ${nichePlural} | ${siteDetails.siteName}`,
    description: `Volledige social media strategie + uitvoering voor ${nichePlural}. Van content planning tot automatisch posten. Consulting inbegrepen.`,
    url: `${siteDetails.siteUrl}social-media`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/services/social-media-hero.jpg`, width: 1376, height: 774, alt: `Social Media voor ${nichePlural} | ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Social Media voor ${nichePlural} | ${siteDetails.siteName}`,
    description: `Volledige social media strategie + uitvoering voor ${nichePlural}. Van content planning tot automatisch posten. Consulting inbegrepen.`,
    images: [`${siteDetails.siteUrl}images/services/social-media-hero.jpg`],
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}social-media`,
  },
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
