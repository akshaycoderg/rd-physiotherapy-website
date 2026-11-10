import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Activity,
  ArrowUpRight,
  Bone,
  Brain,
  HeartPulse,
  MoveVertical,
} from "lucide-react";
import { clinic, type ServiceIcon } from "@/data/clinic";
import { serviceEnquiryLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  bone: Bone,
  brain: Brain,
  accessibility: Accessibility,
  activity: Activity,
  "move-vertical": MoveVertical,
  "heart-pulse": HeartPulse,
};

export function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our services"
          title="Our Physiotherapy Services"
          description="Physiotherapy and rehabilitation support for movement, pain, and functional concerns. Each patient's needs are assessed before a treatment approach is recommended."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {clinic.services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.slug}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors duration-200 hover:border-primary/35"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="icon-tile">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span
                    className="font-display text-xs font-semibold tracking-[0.12em] text-slate-500"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {service.description}
                </p>

                <a
                  href={serviceEnquiryLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp Enquiry
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-muted">
          Service availability is confirmed after an assessment. Physiotherapy
          outcomes vary from person to person, and no specific result is
          guaranteed.
        </p>
      </div>
    </section>
  );
}
