import { clinic } from "@/data/clinic";

export const whatsappBaseUrl = clinic.contact.whatsappBaseUrl;

export function whatsappLink(message?: string) {
  if (!message) return whatsappBaseUrl;
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function serviceEnquiryLink(serviceTitle: string) {
  return whatsappLink(
    `Hello R D Physiotherapy Clinic,\n\nI would like to enquire about ${serviceTitle}.\n\nPlease let me know about appointment availability.\n\nThank you.`,
  );
}

export function generalEnquiryLink() {
  return whatsappLink(
    "Hello R D Physiotherapy Clinic,\n\nI would like to enquire about booking an appointment.\n\nPlease let me know about appointment availability.\n\nThank you.",
  );
}

export type AppointmentDetails = {
  patientName: string;
  mobileNumber: string;
  preferredDate: string;
  preferredTime: string;
  concern: string;
  message?: string;
};

export function formatAppointmentDate(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function appointmentMessage(details: AppointmentDetails) {
  const lines = [
    "Hello R D Physiotherapy Clinic,",
    "",
    "I would like to enquire about booking an appointment.",
    "",
    `Patient Name: ${details.patientName}`,
    `Mobile Number: ${details.mobileNumber}`,
    `Preferred Date: ${formatAppointmentDate(details.preferredDate)}`,
    `Preferred Time: ${details.preferredTime}`,
    `Treatment Concern: ${details.concern}`,
  ];

  if (details.message?.trim()) {
    lines.push(`Additional Message: ${details.message.trim()}`);
  }

  lines.push(
    "",
    "Please let me know about appointment availability.",
    "",
    "Thank you.",
  );

  return lines.join("\n");
}

export function appointmentWhatsAppUrl(details: AppointmentDetails) {
  return whatsappLink(appointmentMessage(details));
}
