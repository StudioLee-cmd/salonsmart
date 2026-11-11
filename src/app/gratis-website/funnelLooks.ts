// De look-SUPPLY van de gratis-website-funnel — NIET hier onderhouden.
//
// Bron  : alpha1/data/build-pipeline/template-register.json  (rijen met een `funnel`-blok)
// Gen   : alpha1/scripts/gen_funnel_looks.py
// Publiek: https://studiolee-command-center.vercel.app/app/previews/_shared/funnel-looks.json
//
// Een look toevoegen/verwijderen = één blok in dat register + de gen-run. Nooit code in deze repo
// (RULE 3 — de V2 hardcodede z'n looks per repo; dat plafonneerde de kwaliteit en dupliceerde 17×).

export type FunnelLook = {
  slug: string;
  label: string;
  tagline: string;
  url: string;      // de échte template/showcase op de bank
  thumb: string;    // screenshot van diezelfde pagina
  tier: "showcase" | "template" | string;
};

const SUPPLY_URL =
  "https://studiolee-command-center.vercel.app/app/previews/_shared/funnel-looks.json";

/** Haalt de looks op die DEZE site aanbiedt. Faalt de bron, dan komt er een lege lijst terug
 *  en toont de pagina haar eigen fallback — nooit een half scherm. */
export async function fetchLooks(siteKey: string): Promise<FunnelLook[]> {
  try {
    const res = await fetch(SUPPLY_URL, { next: { revalidate: 1800 } });
    if (!res.ok) return [];
    const data = await res.json();
    const slugs: string[] = data?.sites?.[siteKey] || [];
    return slugs
      .map((slug) => {
        const l = data?.looks?.[slug];
        return l ? { slug, label: l.label, tagline: l.tagline, url: l.url, thumb: l.thumb, tier: l.tier } : null;
      })
      .filter(Boolean) as FunnelLook[];
  } catch {
    return [];
  }
}

/** De prospect-data die over de gekozen template heen gelegd wordt (personalize.js leest 'm als window.BIZ).
 *  Ze gaat NOOIT in een link: /api/voorbeeld versleutelt haar tot een ondoorzichtig token (privacy-check 11-11). */
export type Prospect = {
  naam: string;
  plaats: string;
  telefoon?: string;
  domein?: string;
  email?: string;
};

/** Zet het voorbeeld klaar via een POST; terug komt een link zonder persoonsgegevens. */
export async function preparePreview(look: FunnelLook, p: Prospect): Promise<{ url: string; absolute: string }> {
  try {
    const res = await fetch("/api/voorbeeld", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ look: look.slug, ...p }),
    });
    if (res.ok) {
      const d = await res.json();
      if (d?.url) return { url: d.url, absolute: d.absolute || d.url };
    }
  } catch {
    /* val terug op het kale ontwerp hieronder */
  }
  return { url: look.url, absolute: look.url };
}
