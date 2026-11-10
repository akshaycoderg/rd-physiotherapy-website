import {
  ArrowUpRight,
  Clock,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { clinic } from "@/data/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact & location"
          title="Visit Our Clinic"
          description="Find the clinic near Union Bank at Hyderabad Gate, Susuwahi. Call, message on WhatsApp, or use the map link for directions."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
            <h3 className="text-lg font-semibold text-navy">{clinic.name}</h3>
            <p className="mt-1 text-sm text-muted">{clinic.specialty}</p>

            <address className="mt-6 space-y-4 text-sm not-italic leading-6">
              <div className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Address
                  </p>
                  <p className="mt-1 text-ink">
                    {clinic.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Landmark: Near Union Bank
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Phone &amp; WhatsApp
                  </p>
                  <a
                    href={clinic.contact.phoneHref}
                    className="mt-1 block font-medium text-ink transition-colors hover:text-primary"
                  >
                    {clinic.contact.phoneDisplay}
                  </a>
                  <a
                    href={generalEnquiryLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-primary"
                  >
                    Message on WhatsApp
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Clock className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Opening hours
                  </p>
                  <p className="mt-1 text-ink">
                    Monday–Saturday: 9:00 AM – 8:00 PM
                  </p>
                  <p className="text-ink">Sunday: 9:00 AM – 12:00 PM</p>
                  <p className="mt-1 text-xs text-muted">
                    Please contact the clinic to confirm availability on public
                    holidays.
                  </p>
                </div>
              </div>
            </address>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-3">
              <ButtonLink href={clinic.contact.phoneHref} size="sm">
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </ButtonLink>
              <ButtonLink
                href={generalEnquiryLink()}
                variant="whatsapp"
                size="sm"
                external
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </ButtonLink>
              <ButtonLink
                href={clinic.mapsUrl}
                variant="outline"
                size="sm"
                external
              >
                <Navigation className="size-4" aria-hidden="true" />
                Directions
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="map-frame h-[340px] bg-slate-100 sm:h-[420px] lg:h-[calc(100%-3.25rem)] lg:min-h-[420px]">
              <iframe
                src={clinic.mapsEmbedUrl}
                title="Map showing the location of R D Physiotherapy Clinic & Rehab Centre"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3">
              <p className="text-[11px] leading-4 text-muted">
                Map based on the clinic&apos;s supplied Google Maps listing.
              </p>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Open in Google Maps
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
