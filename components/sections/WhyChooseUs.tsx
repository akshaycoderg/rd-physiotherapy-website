import { Activity, HeartPulse, MapPin, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: UserRound,
    title: "Personalized Patient Care",
    description:
      "Attention guided by your concerns, movement difficulties, and recovery goals.",
  },
  {
    icon: HeartPulse,
    title: "Rehabilitation-Focused Approach",
    description:
      "Support planned around improving mobility and everyday function.",
  },
  {
    icon: Activity,
    title: "Physiotherapy Services",
    description:
      "Physiotherapy and rehabilitation support across orthopedic, neurological, spine, and joint concerns.",
  },
  {
    icon: MapPin,
    title: "Convenient Clinic Location",
    description:
      "Located near Union Bank at Hyderabad Gate, Susuwahi, Varanasi.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why choose us"
          title="Why Choose R D Physiotherapy Clinic?"
          description="A straightforward, patient-focused approach to physiotherapy and rehabilitation care in Varanasi."
          align="center"
        />

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div key={reason.title} className="border-t border-line pt-6">
                <div className="flex items-center justify-between">
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
                <h3 className="mt-5 text-base font-semibold leading-snug text-navy">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
