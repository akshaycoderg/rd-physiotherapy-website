import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How R D Physiotherapy Clinic & Rehab Centre handles information when you use this website and its WhatsApp appointment enquiry form.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
          <p className="eyebrow mt-7">Legal information</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: 10 November 2026
          </p>
        </div>
      </div>

      <div className="container-page max-w-3xl py-12 sm:py-16">
        <div className="prose-clinic">
          <p>
            This Privacy Policy explains how {clinic.name} handles information
            when you use this website. The website is intended to provide
            general information about the clinic and to make it easy to contact
            the clinic.
          </p>

          <h2>Information you provide</h2>
          <p>
            The appointment enquiry form asks for a patient name, mobile number,
            preferred date and time, treatment or health concern, and an optional
            message. The form does not submit data to a server or database on
            this website. It prepares a WhatsApp message on your device.
          </p>
          <p>
            Your details are sent only when you choose to send the message
            through WhatsApp. The clinic then receives the message through
            WhatsApp in order to respond to your enquiry and discuss appointment
            availability.
          </p>

          <h2>WhatsApp</h2>
          <p>
            Appointment enquiries are handled through WhatsApp. WhatsApp is a
            third-party service, and its own privacy policy applies to messages
            sent through it. You can review WhatsApp&apos;s privacy policy at{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              whatsapp.com/legal/privacy-policy
            </a>
            .
          </p>

          <h2>Website analytics and cookies</h2>
          <p>
            This website does not use advertising cookies or third-party
            analytics tools. The hosting provider may process standard technical
            information, such as request logs, to deliver and protect the
            website.
          </p>

          <h2>How information is used</h2>
          <ul>
            <li>To respond to appointment enquiries and questions.</li>
            <li>To discuss appointment availability and clinic services.</li>
            <li>To communicate with you through the contact method you choose.</li>
          </ul>

          <h2>Medical information</h2>
          <p>
            Please do not send sensitive medical records, reports, or detailed
            health information through the appointment form. Share only the
            information needed to arrange your visit. Any clinical discussion
            should take place directly with the clinic.
          </p>

          <h2>Third-party links</h2>
          <p>
            This website links to WhatsApp and Google Maps. These services are
            operated by third parties and have their own privacy policies. The
            clinic is not responsible for how those services handle information.
          </p>

          <h2>Retention</h2>
          <p>
            The clinic may keep WhatsApp messages for as long as needed to
            respond to your enquiry and manage appointment communication. The
            website itself does not store the appointment form entries.
          </p>

          <h2>Your choices</h2>
          <p>
            You can choose not to use the WhatsApp form and contact the clinic by
            phone instead. If you have questions about information you have sent
            to the clinic, please contact the clinic directly.
          </p>

          <h2>Contact</h2>
          <p>
            {clinic.name}
            <br />
            {clinic.address.full}
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

          <h2>Changes to this policy</h2>
          <p>
            This policy may be updated if the website or clinic processes
            change. The latest version will be published on this page with a
            revised date.
          </p>
        </div>
      </div>
    </>
  );
}
