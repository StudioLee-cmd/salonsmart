import { fetchLooks } from "@/app/gratis-website/funnelLooks";
import { siteDetails } from "@/data/siteDetails";
import { open } from "@/lib/previewToken";

// Toont het gekozen ontwerp op de naam van de prospect zonder dat er één gegeven in de link staat:
// het token wordt hier geopend, de template-HTML van de bank wordt opgehaald en de gegevens gaan als
// window.BIZ mee (personalize.js leest die als er geen ?d= is). Het pad bevat /templates/<niche>/
// zodat de laag van de bank de niche nog herkent.
const SITE_KEY = siteDetails.siteName.toLowerCase();
const HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "private, no-store",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow",
};

const json = (v: unknown) =>
  JSON.stringify(v).replace(/</g, "\\u003c").replace(/[\u2028\u2029]/g, (c) => "\\u" + c.charCodeAt(0).toString(16));
const attr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export async function GET(_request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const data = open(token);
  const gone = () => Response.redirect(`${siteDetails.siteUrl}gratis-website`, 302);
  if (!data) return gone();
  const look = (await fetchLooks(SITE_KEY)).find((l) => l.slug === data.look);
  if (!look) return gone();
  const res = await fetch(look.url, { cache: "no-store" });
  if (!res.ok) return gone();
  let html = await res.text();
  const biz = { ...data };
  delete biz.t;
  delete biz.look;
  // In-page ankers blijven op deze pagina; met <base> zouden ze naar het kale ontwerp springen.
  const inject =
    `<base href="${attr(look.url)}"><meta name="robots" content="noindex,nofollow"><meta name="referrer" content="no-referrer">` +
    `<script>window.BIZ=${json(biz)};document.addEventListener("click",function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href^="#"]');` +
    `if(!a)return;var h=a.getAttribute("href");e.preventDefault();if(h.length>1){var el=document.getElementById(decodeURIComponent(h.slice(1)));if(el)el.scrollIntoView({behavior:"smooth"});}history.replaceState(null,"",location.pathname+h);},true);</script>`;
  html = /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, (m) => m + inject) : inject + html;
  return new Response(html, { status: 200, headers: HEADERS });
}
