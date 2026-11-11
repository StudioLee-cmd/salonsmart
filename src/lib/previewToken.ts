// Een voorbeeld-link draagt NOOIT naam, telefoon of e-mail (privacy-check 11-11): de gegevens van de
// prospect gaan versleuteld (AES-256-GCM) in een ondoorzichtig token. Alleen deze server kan het openen.
// Sleutel: PREVIEW_TOKEN_SECRET (Vercel env). Zonder sleutel geen token — de funnel valt dan terug op
// het kale ontwerp, nooit op gegevens in de link.
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";

const MAX_AGE_MS = 180 * 24 * 3600 * 1000;

function key(): Buffer | null {
  const secret = process.env.PREVIEW_TOKEN_SECRET;
  return secret && secret.length >= 32 ? createHash("sha256").update(secret).digest() : null;
}

export function canSeal(): boolean {
  return key() !== null;
}

export function seal(data: Record<string, unknown>): string | null {
  const k = key();
  if (!k) return null;
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", k, iv);
  const body = Buffer.concat([cipher.update(JSON.stringify({ ...data, t: Date.now() }), "utf8"), cipher.final()]);
  return Buffer.concat([iv, cipher.getAuthTag(), body]).toString("base64url");
}

export function open(token: string): Record<string, unknown> | null {
  const k = key();
  if (!k || !/^[A-Za-z0-9_-]{40,2000}$/.test(token)) return null;
  try {
    const raw = Buffer.from(token, "base64url");
    const decipher = createDecipheriv("aes-256-gcm", k, raw.subarray(0, 12));
    decipher.setAuthTag(raw.subarray(12, 28));
    const data = JSON.parse(Buffer.concat([decipher.update(raw.subarray(28)), decipher.final()]).toString("utf8"));
    if (typeof data?.t !== "number" || Date.now() - data.t > MAX_AGE_MS) return null;
    return data;
  } catch {
    return null;
  }
}
