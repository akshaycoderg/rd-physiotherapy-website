import Image from "next/image";
import {
  CalendarCheck,
  Check,
  Info,
  Phone,
  Stethoscope,
} from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.webp";
import { clinic } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Doctor() {
  return (
    <section id="doctor" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line bg-mist p-2 shadow-card">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={doctorPortrait}
                alt="Portrait of Dr. Indra Prakash Vishwakarma, physiotherapist"
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] leading-4 text-muted">
            Portrait supplied by the clinic.
          </p>
        </div>

        <div>
          <SectionHeading
            eyebrow="Meet our physiotherapist"
            title="Meet Our Physiotherapist"
            description="Personalized physiotherapy support, with attention to how movement difficulties affect everyday life."
          />

          <div className="mt-7">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-navy">
              {clinic.doctor.name}
            </h3>
            <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary">
              <Stethoscope className="size-3.5" aria-hidden="true" />
              {clinic.doctor.profession}
            </p>
          </div>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            {clinic.doctor.intro}
          </p>

          <div className="mt-7">
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">
              Areas of practice
            </h4>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {clinic.doctor.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2.5 text-sm text-ink"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                    <Check
                      className="size-3"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-line bg-mist px-4 py-3 text-[13px] leading-6 text-muted">
            <Info
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p>
              Qualifications and professional experience will be published here
              once they have been verified by the clinic.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#appointment">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book Consultation
            </ButtonLink>
            <ButtonLink href={clinic.contact.phoneHref} variant="outline">
              <Phone className="size-4" aria-hidden="true" />
              Call Clinic
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
