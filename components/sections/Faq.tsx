import { ArrowUpRight, Phone, Plus } from "lucide-react";
import { clinic } from "@/data/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            description="Clear answers about clinic services, appointments, timings, and location. For anything specific to your health, please contact the clinic directly."
          />

          <div className="mt-7 rounded-xl border border-line bg-mist p-5">
            <h3 className="text-base font-semibold text-navy">
              Still have a question?
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-muted">
              Contact the clinic on WhatsApp or by phone. The clinic will be
              able to confirm details for your visit.
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <ButtonLink
                href={generalEnquiryLink()}
                variant="whatsapp"
                size="sm"
                external
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp Enquiry
              </ButtonLink>
              <ButtonLink
                href={clinic.contact.phoneHref}
                variant="outline"
                size="sm"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call {clinic.contact.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="border-t border-line">
          {clinic.faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="faq-item group border-b border-line py-5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 rounded-md text-left">
                <span className="text-[15px] font-semibold leading-6 text-navy sm:text-base">
                  {faq.question}
                </span>
                <span className="faq-plus mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-line bg-white text-primary transition-all duration-200">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <div className="pr-10 pt-3">
                <p className="text-sm leading-7 text-muted">{faq.answer}</p>
                {faq.cta ? (
                  <a
                    href={faq.cta.href}
                    target={faq.cta.external ? "_blank" : undefined}
                    rel={faq.cta.external ? "noopener noreferrer" : undefined}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    {faq.cta.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
