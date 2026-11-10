import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Medical disclaimer for the R D Physiotherapy Clinic & Rehab Centre website. Website information does not replace professional medical advice, diagnosis, or treatment.",
  alternates: {
    canonical: "/medical-disclaimer",
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-page py-12 sm:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <p className="eyebrow mt-7">Important information</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl">
            Medical Disclaimer
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: 10 November 2026
          </p>
        </div>
      </div>

      <div className="container-page max-w-3xl py-12 sm:py-16">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="flex items-start gap-2.5 text-sm leading-6 text-amber-900">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0"
              aria-hidden="true"
            />
            This website provides general information about physiotherapy and
            the clinic. It is not a substitute for professional medical advice,
            diagnosis, or treatment.
          </p>
        </div>

        <div className="prose-clinic">
          <h2>General information only</h2>
          <p>
            The information on this website is provided for general awareness
            about {clinic.name}, its services, and how to contact the clinic. It
            should not be used to diagnose a health condition or to decide on a
            treatment plan.
          </p>

          <h2>No medical advice or doctor-patient relationship</h2>
          <p>
            Reading this website or sending an appointment enquiry does not
            create a doctor-patient relationship and does not constitute medical
            advice. A physiotherapy assessment is needed before any treatment
            approach can be recommended.
          </p>

          <h2>No guaranteed outcomes</h2>
          <p>
            Physiotherapy and rehabilitation outcomes vary from person to
            person. Nothing on this website should be understood as a promise or
            guarantee of recovery, pain relief, improved mobility, or any other
            specific result.
          </p>

          <h2>Individual assessment is required</h2>
          <p>
            The suitability of physiotherapy, the appropriate treatment
            approach, and the expected duration of care depend on an individual
            assessment. Always speak with a qualified health professional about
            your condition and treatment options.
          </p>

          <h2>Emergencies</h2>
          <p>
            This clinic website and its contact channels are not an emergency
            service. If you have a medical emergency, contact your local
            emergency services or visit the nearest hospital immediately.
          </p>

          <h2>External links</h2>
          <p>
            Links to Google Maps, WhatsApp, and other third-party services are
            provided for convenience. The clinic does not control those services
            or their content.
          </p>

          <h2>Contact the clinic</h2>
          <p>
            If you have questions about whether physiotherapy is appropriate for
            your situation, please contact the clinic directly.
            <br />
            Phone:{" "}
            <a href={clinic.contact.phoneHref}>
              {clinic.contact.phoneDisplay}
            </a>
            <br />
            WhatsApp:{" "}
            <a
              href={clinic.contact.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {clinic.contact.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
