import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import CrmContent from "./CrmContent";

export const metadata: Metadata = {
  title: `CRM voor ${siteDetails.niche} — ${siteDetails.siteName}`,
  description: `Een CRM voor ${siteDetails.niche?.toLowerCase()} die klantgegevens, afspraken en follow-ups op één plek bundelt. Geen versnipperde Excel-bestanden, geen vergeten klanten.`,
  openGraph: {
    title: `CRM voor ${siteDetails.niche} — ${siteDetails.siteName}`,
    description: `Een CRM voor ${siteDetails.niche?.toLowerCase()} die klantgegevens, afspraken en follow-ups op één plek bundelt.`,
    url: `${siteDetails.siteUrl}crm`,
    type: "website",
    locale: "nl_NL",
    images: [{ url: `${siteDetails.siteUrl}images/services/crm-hero.jpg`, width: 1376, height: 774, alt: `CRM voor ${siteDetails.niche} — ${siteDetails.siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `CRM voor ${siteDetails.niche} — ${siteDetails.siteName}`,
    description: `Een CRM voor ${siteDetails.niche?.toLowerCase()} die klantgegevens, afspraken en follow-ups op één plek bundelt.`,
    images: [`${siteDetails.siteUrl}images/services/crm-hero.jpg`],
  },
  alternates: { canonical: `${siteDetails.siteUrl}crm` },
};

export default function CrmPage() {
  return <CrmContent />;
}
