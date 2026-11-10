import Image from "next/image";
import { ArrowRight, CalendarCheck, Check, Clock, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/physiotherapy-treatment-room.webp";
import { clinic } from "@/data/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const highlights = [
  "Personalised treatment approach",
  "Rehabilitation-focused care",
  "Convenient Susuwahi location",
  "Easy WhatsApp booking",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="hero-pattern pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="container-page relative grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow">
            <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
            Physiotherapy &amp; Rehabilitation · Varanasi
          </p>

          <h1 className="mt-5 max-w-2xl text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.035em] text-navy sm:text-5xl lg:text-[3.35rem]">
            Move Better.{" "}
            <span className="text-primary">Recover Stronger.</span> Live
            Healthier.
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted sm:text-lg sm:leading-8">
            Personalized physiotherapy and rehabilitation care to help you
            manage pain, restore movement, and improve your quality of life.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#appointment" size="lg">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book Appointment
            </ButtonLink>
            <ButtonLink
              href={generalEnquiryLink()}
              variant="whatsapp"
              size="lg"
              external
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp Enquiry
            </ButtonLink>
            <ButtonLink href={clinic.contact.phoneHref} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-2.5 text-sm text-ink sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                  <Check className="size-3" strokeWidth={2.5} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-2xl border border-white bg-white p-2 shadow-float">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={heroImage}
                alt="Representative image of a physiotherapy treatment room"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-navy/90 px-2.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
                Physiotherapy &amp; Rehab
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                <Clock className="size-4" aria-hidden="true" />
                Clinic Hours
              </div>
              <p className="mt-2 text-sm font-medium text-navy">
                Mon–Sat: 9:00 AM – 8:00 PM
              </p>
              <p className="mt-1 text-xs text-muted">
                Sunday: 9:00 AM – 12:00 PM
              </p>
            </div>
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-line bg-white p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                <MapPin className="size-4" aria-hidden="true" />
                Find the Clinic
              </div>
              <p className="mt-2 text-sm font-medium text-navy">
                Hyderabad Gate, Susuwahi
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                Get directions
                <ArrowRight
                  className="size-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </p>
            </a>
          </div>

          <p className="mt-2.5 text-[11px] leading-4 text-muted">
            Representative treatment-room image. Clinic photographs will be
            updated after approval.
          </p>
        </div>
      </div>
    </section>
  );
}
