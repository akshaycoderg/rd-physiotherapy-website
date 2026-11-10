import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { clinic, navItems } from "@/data/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const footerServiceLinks = clinic.services.map((service) => ({
  label: service.title,
  href: "/#services",
}));

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-blue-100">
      <div className="h-1 bg-primary" aria-hidden="true" />
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/85">
              Physiotherapy and rehabilitation care focused on improving
              mobility, managing pain, and supporting recovery for patients in
              Varanasi.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={generalEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp Enquiry
              </a>
              <a
                href={clinic.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#appointment"
                  className="font-semibold text-white transition-colors hover:text-blue-200"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerServiceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Visit the Clinic
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic leading-6">
              <p className="flex gap-2.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span>
                  {clinic.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-teal" aria-hidden="true" />
                <a
                  href={clinic.contact.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {clinic.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-2.5">
                <Clock
                  className="mt-0.5 size-4 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span>
                  <span className="block">Mon–Sat: 9:00 AM – 8:00 PM</span>
                  <span className="block">Sunday: 9:00 AM – 12:00 PM</span>
                </span>
              </p>
            </address>
            <p className="mt-4 text-sm text-blue-100/80">
              {clinic.doctor.name}
              <br />
              <span className="text-blue-100/65">
                {clinic.doctor.profession}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs leading-5 text-blue-100/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {clinic.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/medical-disclaimer"
                className="transition-colors hover:text-white"
              >
                Medical Disclaimer
              </Link>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Google Maps
              </a>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-5 text-blue-100/80">
            This website is for general information only and does not replace
            professional medical advice, diagnosis, or treatment. Treatment
            suitability and outcomes vary from person to person.
          </p>
        </div>
      </div>
    </footer>
  );
}
