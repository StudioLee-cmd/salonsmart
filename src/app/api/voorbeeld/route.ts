import { NextResponse } from "next/server";
import { siteDetails } from "@/data/siteDetails";
import { fetchLooks } from "@/app/gratis-website/funnelLooks";
import { seal } from "@/lib/previewToken";

// Zet het voorbeeld klaar: de gegevens komen in de POST-body binnen en gaan versleuteld terug als
// een ondoorzichtige link. Niets hiervan belandt in een URL.
const SITE_KEY = siteDetails.siteName.toLowerCase();
const text = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "invalid" }, { status: 400 }); }
  const look = (await fetchLooks(SITE_KEY)).find((l) => l.slug === text(body.look, 120));
  if (!look) return NextResponse.json({ error: "look" }, { status: 400 });
  const plain = look.url; // het kale ontwerp, zonder gegevens
  const niche = (look.url.match(/\/templates\/([^/]+)\//) || [])[1] || "ontwerp";
  const token = seal({
    look: look.slug,
    naam: text(body.naam, 120),
    plaats: text(body.plaats, 80),
    telefoon: text(body.telefoon, 40) || undefined,
    domein: text(body.domein, 120) || undefined,
    email: text(body.email, 254) || undefined,
    b: siteDetails.siteUrl.replace(/\/$/, ""),
  });
  if (!token) return NextResponse.json({ url: plain, absolute: plain, sealed: false });
  const path = `/gratis-website/voorbeeld/templates/${niche}/${token}`;
  return NextResponse.json({ url: path, absolute: siteDetails.siteUrl.replace(/\/$/, "") + path, sealed: true });
}
