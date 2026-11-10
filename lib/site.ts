import { clinic } from "@/data/clinic";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rd-physiotherapy.vercel.app"
).replace(/\/+$/, "");

export const siteName = clinic.name;

export const siteDescription =
  "Physiotherapy and rehabilitation care in Susuwahi, Varanasi. Personalized support for orthopedic, neurological, spine, and joint concerns. Book an appointment via WhatsApp.";

export const ogImage = `${siteUrl}/images/og-image.jpg`;

export const twitterHandle = "@rdphysio_varanasi";
