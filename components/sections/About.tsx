import Image from "next/image";
import { Activity, Building2, HeartPulse, MapPin, UserRound } from "lucide-react";
import aboutImage from "@/assets/physiotherapy-treatment-room.webp";
import { clinic } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";

const informationPoints = [
  {
    icon: Activity,
    title: "Physiotherapy care",
    description: "Assessment and treatment for movement and pain concerns.",
  },
  {
    icon: HeartPulse,
    title: "Rehabilitation-focused",
    description: "Support planned around mobility and everyday function.",
  },
  {
    icon: UserRound,
    title: "Patient-oriented",
    description: "Attention guided by each patient's needs and goals.",
  },
  {
    icon: Building2,
    title: "Clinic facilities",
    description: "A dedicated clinic setting at Hyderabad Gate, Susuwahi.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About the clinic"
            title="About R D Physiotherapy Clinic & Rehab Centre"
            description="R D Physiotherapy Clinic & Rehab Centre provides physiotherapy and rehabilitation care focused on improving mobility, managing pain, and supporting recovery. The clinic aims to provide personalized attention and treatment approaches according to individual patient needs."
          />

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
            The clinic is located near Union Bank at Hyderabad Gate, Susuwahi,
            Varanasi, and supports patients seeking physiotherapy care for
            movement, pain, and functional concerns.
          </p>

          <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {informationPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flex gap-3.5">
                  <span className="icon-tile size-10">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-5 text-muted">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-start gap-2.5 rounded-lg border border-line bg-mist px-4 py-3 text-[13px] leading-6 text-muted">
            <MapPin
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p>
              <span className="font-semibold text-navy">Clinic address:</span>{" "}
              {clinic.address.full}
            </p>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-card">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={aboutImage}
                alt="Representative image of a physiotherapy treatment room"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
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
              View location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
