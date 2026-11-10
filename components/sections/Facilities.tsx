import Image from "next/image";
import {
  ArrowRight,
  DoorOpen,
  HeartPulse,
  Info,
  MapPin,
  MessagesSquare,
} from "lucide-react";
import facilitiesImage from "@/assets/physiotherapy-treatment-room.webp";
import { clinic } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facilityIcons = [DoorOpen, MessagesSquare, HeartPulse, MapPin];

export function Facilities() {
  return (
    <section id="facilities" className="section section-alt">
      <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-card">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={facilitiesImage}
                alt="Representative image of a physiotherapy treatment room"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] leading-4 text-muted">
              Representative treatment-room image. Clinic photographs will be
              updated after approval.
            </p>
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              Get directions
              <ArrowRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Clinic facilities"
            title="Our Physiotherapy Facilities"
            description="The clinic provides a dedicated setting for physiotherapy assessment and rehabilitation care, with a focus on comfort, privacy, and individualized attention."
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {clinic.facilities.map((facility, index) => {
              const Icon = facilityIcons[index] ?? HeartPulse;

              return (
                <div
                  key={facility.title}
                  className="rounded-xl border border-line bg-white p-4"
                >
                  <span className="icon-tile size-10">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3.5 text-sm font-semibold text-navy">
                    {facility.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-muted">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-line bg-white px-4 py-3 text-[13px] leading-6 text-muted">
            <Info
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p>
              A detailed equipment and facility list will be added after clinic
              approval. Please contact the clinic for current facility details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
