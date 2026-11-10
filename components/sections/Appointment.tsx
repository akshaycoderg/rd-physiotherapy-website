import { CheckCircle2, Info, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { AppointmentForm } from "@/components/sections/AppointmentForm";

const steps = [
  {
    title: "Share your details",
    description:
      "Add the patient name, mobile number, preferred date and time, and your health concern.",
  },
  {
    title: "Send through WhatsApp",
    description:
      "The form creates a WhatsApp message. You review it and send it to the clinic yourself.",
  },
  {
    title: "Clinic confirms availability",
    description:
      "The clinic replies on WhatsApp to confirm whether your preferred appointment is available.",
  },
];

export function Appointment() {
  return (
    <section id="appointment" className="section section-alt">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Appointment booking"
            title="Book Your Physiotherapy Appointment"
            description="Take the first step towards better movement and recovery. Contact our clinic to enquire about an appointment."
          />

          <ol className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-xl border border-line bg-white p-5">
            <h3 className="text-sm font-semibold text-navy">
              Prefer to speak directly?
            </h3>
            <p className="mt-1.5 text-[13px] leading-6 text-muted">
              Call the clinic or send a WhatsApp message. Please contact the
              clinic before visiting so availability can be confirmed.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <ButtonLink href={clinic.contact.phoneHref} size="sm">
                <Phone className="size-4" aria-hidden="true" />
                Call {clinic.contact.phoneDisplay}
              </ButtonLink>
              <ButtonLink
                href={generalEnquiryLink()}
                variant="outline"
                size="sm"
                external
              >
                <WhatsAppIcon className="size-4 text-whatsapp" />
                WhatsApp Enquiry
              </ButtonLink>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-line bg-white px-4 py-3 text-[13px] leading-6 text-muted">
            <Info
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p>
              No appointment is confirmed automatically. The clinic will reply
              to confirm availability. Please do not send sensitive medical
              records through the form.
            </p>
          </div>
        </div>

        <div>
          <AppointmentForm />
          <p className="mt-4 flex items-start justify-center gap-1.5 text-center text-[11px] leading-4 text-muted">
            <CheckCircle2
              className="mt-0.5 size-3.5 shrink-0 text-teal"
              aria-hidden="true"
            />
            Your details are composed into a WhatsApp message and are not stored
            on this website.
          </p>
        </div>
      </div>
    </section>
  );
}
