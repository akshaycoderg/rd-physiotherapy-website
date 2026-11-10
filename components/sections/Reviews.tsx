import { ExternalLink, Quote, ShieldCheck } from "lucide-react";
import { clinic } from "@/data/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Reviews() {
  return (
    <section id="reviews" className="section section-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient feedback"
          title="What Our Patients Say"
          align="center"
        />

        <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-line bg-white p-7 text-center shadow-card sm:p-10">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal-light text-teal">
            <Quote className="size-5" aria-hidden="true" />
          </span>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted sm:text-base">
            Verified patient feedback will be published here only after it has
            been approved by the clinic. We do not create or display fictional
            reviews, names, or ratings.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
            You can view the clinic&apos;s Google listing for location details,
            or contact the clinic directly to share your experience.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={clinic.mapsUrl}
              variant="outline"
              external
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              View Google Listing
            </ButtonLink>
            <ButtonLink
              href={generalEnquiryLink()}
              variant="whatsapp"
              external
            >
              <WhatsAppIcon className="size-4" />
              Share Feedback on WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-5 inline-flex items-center gap-1.5 text-[11px] leading-4 text-muted">
            <ShieldCheck className="size-3.5 text-teal" aria-hidden="true" />
            Feedback is only added after verification and clinic approval.
          </p>
        </div>
      </div>
    </section>
  );
}
