"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Info, Phone } from "lucide-react";
import { clinic, serviceOptions } from "@/data/clinic";
import {
  appointmentWhatsAppUrl,
  type AppointmentDetails,
} from "@/lib/whatsapp";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type FormValues = {
  patientName: string;
  mobileNumber: string;
  preferredDate: string;
  preferredTime: string;
  concern: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  patientName: "",
  mobileNumber: "",
  preferredDate: "",
  preferredTime: "",
  concern: "",
  message: "",
};

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
];

function todayLocal() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [lastUrl, setLastUrl] = useState<string | null>(null);
  const minDate = todayLocal();

  function updateField<K extends keyof FormValues>(
    field: K,
    value: FormValues[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setLastUrl(null);
  }

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (values.patientName.trim().length < 2) {
      next.patientName = "Please enter the patient's name.";
    }

    const digits = values.mobileNumber.replace(/\D/g, "");
    if (!digits) {
      next.mobileNumber = "Please enter a mobile number.";
    } else if (!/^(?:91)?[6-9]\d{9}$/.test(digits)) {
      next.mobileNumber = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!values.preferredDate) {
      next.preferredDate = "Please choose a preferred date.";
    } else if (values.preferredDate < todayLocal()) {
      next.preferredDate = "Please choose today or a future date.";
    }

    if (!values.preferredTime) {
      next.preferredTime = "Please choose a preferred time.";
    }

    if (!values.concern) {
      next.concern = "Please select a treatment or health concern.";
    }

    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    const details: AppointmentDetails = {
      patientName: values.patientName.trim(),
      mobileNumber: values.mobileNumber.trim(),
      preferredDate: values.preferredDate,
      preferredTime: values.preferredTime,
      concern: values.concern,
      message: values.message.trim(),
    };

    const url = appointmentWhatsAppUrl(details);
    setLastUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="patientName" className="field-label">
            Patient Name <span className="text-red-500">*</span>
          </label>
          <input
            id="patientName"
            name="patientName"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={values.patientName}
            onChange={(event) =>
              updateField("patientName", event.target.value)
            }
            className="field-input"
            aria-invalid={Boolean(errors.patientName)}
            aria-describedby={
              errors.patientName ? "patientName-error" : undefined
            }
            required
          />
          {errors.patientName ? (
            <p id="patientName-error" className="field-error">
              {errors.patientName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="mobileNumber" className="field-label">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            value={values.mobileNumber}
            onChange={(event) =>
              updateField("mobileNumber", event.target.value)
            }
            className="field-input"
            aria-invalid={Boolean(errors.mobileNumber)}
            aria-describedby={
              errors.mobileNumber ? "mobileNumber-error" : undefined
            }
            required
          />
          {errors.mobileNumber ? (
            <p id="mobileNumber-error" className="field-error">
              {errors.mobileNumber}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="preferredDate" className="field-label">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={minDate}
            value={values.preferredDate}
            onChange={(event) =>
              updateField("preferredDate", event.target.value)
            }
            className="field-input"
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={
              errors.preferredDate ? "preferredDate-error" : undefined
            }
            required
          />
          {errors.preferredDate ? (
            <p id="preferredDate-error" className="field-error">
              {errors.preferredDate}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="preferredTime" className="field-label">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={values.preferredTime}
            onChange={(event) =>
              updateField("preferredTime", event.target.value)
            }
            className="field-input"
            aria-invalid={Boolean(errors.preferredTime)}
            aria-describedby={
              errors.preferredTime ? "preferredTime-error" : undefined
            }
            required
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.preferredTime ? (
            <p id="preferredTime-error" className="field-error">
              {errors.preferredTime}
            </p>
          ) : null}
          <p className="mt-1.5 text-[11px] leading-4 text-muted">
            Mon–Sat: 9:00 AM – 8:00 PM · Sun: 9:00 AM – 12:00 PM
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="concern" className="field-label">
            Treatment / Health Concern <span className="text-red-500">*</span>
          </label>
          <select
            id="concern"
            name="concern"
            value={values.concern}
            onChange={(event) => updateField("concern", event.target.value)}
            className="field-input"
            aria-invalid={Boolean(errors.concern)}
            aria-describedby={errors.concern ? "concern-error" : undefined}
            required
          >
            <option value="">Select a concern</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.concern ? (
            <p id="concern-error" className="field-error">
              {errors.concern}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Additional Message{" "}
            <span className="font-normal text-muted">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={500}
            placeholder="Anything else the clinic should know?"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="field-input resize-y"
          />
          <p className="mt-1.5 text-[11px] leading-4 text-muted">
            Please do not share sensitive medical records through this form.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className={buttonClasses("whatsapp", "lg", "mt-5 w-full")}
      >
        <WhatsAppIcon className="size-5" />
        Book Appointment on WhatsApp
      </button>

      <p className="mt-3 flex items-start gap-2 text-[12px] leading-5 text-muted">
        <Info
          className="mt-0.5 size-4 shrink-0 text-primary"
          aria-hidden="true"
        />
        Your appointment enquiry will be sent through WhatsApp. The clinic will
        confirm your appointment availability.
      </p>

      <p className="mt-2 text-[11px] leading-4 text-muted">
        By continuing, you agree to our{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-primary underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        . This form does not store your details on the website.
      </p>

      {lastUrl ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 rounded-lg border border-teal/25 bg-teal-light px-4 py-3 text-[13px] leading-6 text-ink"
        >
          <p className="font-semibold text-navy">
            WhatsApp is opening in a new tab.
          </p>
          <p className="mt-1">
            If it did not open,{" "}
            <a
              href={lastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2"
            >
              open WhatsApp again
            </a>{" "}
            to send your enquiry. The appointment is confirmed only after the
            clinic replies.
          </p>
        </div>
      ) : null}

      <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted sm:hidden">
        <Phone className="size-3" aria-hidden="true" />
        Prefer to call?{" "}
        <a
          href={clinic.contact.phoneHref}
          className="font-semibold text-primary"
        >
          {clinic.contact.phoneDisplay}
        </a>
      </div>

      <p className="mt-4 hidden items-center justify-center gap-1.5 text-[11px] text-muted sm:flex">
        <CalendarDays className="size-3" aria-hidden="true" />
        The clinic will confirm availability after receiving your message.
      </p>
    </form>
  );
}
