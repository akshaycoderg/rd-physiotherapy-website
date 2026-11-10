export type ServiceIcon =
  | "bone"
  | "brain"
  | "accessibility"
  | "activity"
  | "move-vertical"
  | "heart-pulse";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type ClinicHour = {
  day: string;
  short: string;
  opens: string;
  closes: string;
  display: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export const clinic = {
  name: "R D Physiotherapy Clinic & Rehab Centre",
  shortName: "R D Physiotherapy",
  specialty: "Physiotherapy and Rehabilitation Care",
  tagline: "Move better. Recover stronger. Live healthier.",
  description:
    "R D Physiotherapy Clinic & Rehab Centre provides physiotherapy and rehabilitation care focused on improving mobility, managing pain, and supporting recovery.",
  doctor: {
    name: "Dr. Indra Prakash Vishwakarma",
    profession: "Physiotherapist",
    intro:
      "Dr. Indra Prakash Vishwakarma is the physiotherapist at R D Physiotherapy Clinic & Rehab Centre. He provides physiotherapy and rehabilitation support with a focus on understanding each patient's movement difficulties, daily needs, and recovery goals.",
    areas: [
      "Orthopedic physiotherapy",
      "Neurological rehabilitation",
      "Paralysis rehabilitation",
      "Spine, neck and joint care",
    ],
    // Add verified qualifications here once approved by the clinic.
    qualifications: null as string[] | null,
    // Add a verified number of years here once approved by the clinic.
    experienceYears: null as number | null,
  },
  contact: {
    phoneDisplay: "+91 91982 46238",
    phoneHref: "tel:+919198246238",
    whatsappDisplay: "+91 91982 46238",
    whatsappNumber: "919198246238",
    whatsappBaseUrl: "https://wa.me/919198246238",
  },
  address: {
    full: "Nandlal Rai Building, Near Union Bank, Hyderabad Gate, Susuwahi, Varanasi, Uttar Pradesh, India",
    lines: [
      "Nandlal Rai Building, Near Union Bank",
      "Hyderabad Gate, Susuwahi",
      "Varanasi, Uttar Pradesh, India",
    ],
    streetAddress:
      "Nandlal Rai Building, Near Union Bank, Hyderabad Gate, Susuwahi",
    locality: "Varanasi",
    region: "Uttar Pradesh",
    country: "India",
    short: "Hyderabad Gate, Susuwahi, Varanasi",
  },
  mapsUrl: "https://maps.app.goo.gl/J96svbhVfMJVE1o2A",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Nandlal Rai Building, Near Union Bank, Hyderabad Gate, Susuwahi, Varanasi, Uttar Pradesh, India",
    ) +
    "&z=16&output=embed",
  hours: [
    { day: "Monday", short: "Mon", opens: "09:00", closes: "20:00", display: "9:00 AM – 8:00 PM" },
    { day: "Tuesday", short: "Tue", opens: "09:00", closes: "20:00", display: "9:00 AM – 8:00 PM" },
    { day: "Wednesday", short: "Wed", opens: "09:00", closes: "20:00", display: "9:00 AM – 8:00 PM" },
    { day: "Thursday", short: "Thu", opens: "09:00", closes: "20:00", display: "9:00 AM – 8:00 PM" },
    { day: "Friday", short: "Fri", opens: "09:00", closes: "20:00", display: "9:00 AM – 8:00 PM" },
    { day: "Saturday", short: "Sat", opens: "09:00", closes: "20:00", display: "9:00 AM – 8:00 PM" },
    { day: "Sunday", short: "Sun", opens: "09:00", closes: "12:00", display: "9:00 AM – 12:00 PM" },
  ] as ClinicHour[],
  services: [
    {
      slug: "orthopedic-physiotherapy",
      title: "Orthopedic Physiotherapy",
      description:
        "Physiotherapy support for musculoskeletal conditions, pain management, and functional movement.",
      icon: "bone",
    },
    {
      slug: "neurological-rehabilitation",
      title: "Neurological Rehabilitation",
      description:
        "Rehabilitation support for patients experiencing neurological movement and functional difficulties.",
      icon: "brain",
    },
    {
      slug: "paralysis-rehabilitation",
      title: "Paralysis Rehabilitation",
      description:
        "Individualized rehabilitation support to improve mobility and daily functioning following paralysis.",
      icon: "accessibility",
    },
    {
      slug: "spine-care",
      title: "Spine Care",
      description:
        "Physiotherapy and rehabilitation support for selected spine-related conditions, including PIVD.",
      icon: "activity",
    },
    {
      slug: "cervical-lumbar-care",
      title: "Cervical & Lumbar Care",
      description:
        "Rehabilitation support for neck and lower-back conditions, including cervical and lumbar spondylosis.",
      icon: "move-vertical",
    },
    {
      slug: "joint-pain-management",
      title: "Joint Pain Management",
      description:
        "Physiotherapy support for knee, shoulder, back, and other joint-related discomfort.",
      icon: "heart-pulse",
    },
  ] as Service[],
  facilities: [
    {
      title: "Dedicated treatment space",
      description:
        "A clinic setting for physiotherapy assessment and one-to-one treatment.",
    },
    {
      title: "Comfortable consultation area",
      description:
        "A calm space to discuss your concerns, movement difficulties, and recovery goals.",
    },
    {
      title: "Rehabilitation-focused care",
      description:
        "Support planned around improving mobility and everyday function.",
    },
    {
      title: "Convenient local location",
      description:
        "Near Union Bank at Hyderabad Gate, Susuwahi, with easy access from nearby areas.",
    },
  ],
  faqs: [
    {
      question: "What services does the clinic provide?",
      answer:
        "The clinic provides physiotherapy and rehabilitation support in six areas: orthopedic physiotherapy, neurological rehabilitation, paralysis rehabilitation, spine care, cervical and lumbar care, and joint pain management. Suitability of a service is confirmed after an assessment.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can send an appointment enquiry using the form on this website. It opens WhatsApp with your details so you can send the message to the clinic. You can also call the clinic directly.",
      cta: {
        label: "Call +91 91982 46238",
        href: "tel:+919198246238",
      },
    },
    {
      question: "What are the clinic opening hours?",
      answer:
        "The clinic is open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 9:00 AM to 12:00 PM.",
    },
    {
      question: "Where is the clinic located?",
      answer:
        "The clinic is at Nandlal Rai Building, Near Union Bank, Hyderabad Gate, Susuwahi, Varanasi, Uttar Pradesh, India.",
      cta: {
        label: "Get directions",
        href: "https://maps.app.goo.gl/J96svbhVfMJVE1o2A",
        external: true,
      },
    },
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "Please contact the clinic before visiting so that appointment availability can be confirmed. Availability may vary, and the clinic will let you know a suitable time.",
      cta: {
        label: "Enquire on WhatsApp",
        href: "https://wa.me/919198246238",
        external: true,
      },
    },
    {
      question: "What conditions can physiotherapy help with?",
      answer:
        "Physiotherapy may support people with musculoskeletal pain, movement limitations, neurological rehabilitation needs, spine-related conditions, and joint discomfort. The physiotherapist will assess whether physiotherapy is appropriate for your individual situation. No specific outcome is guaranteed.",
    },
    {
      question: "How long does a physiotherapy session take?",
      answer:
        "Session duration varies depending on the assessment and treatment plan. Please contact the clinic to confirm the expected duration for your visit.",
      cta: {
        label: "Ask the clinic on WhatsApp",
        href: "https://wa.me/919198246238",
        external: true,
      },
    },
    {
      question: "What is the consultation fee?",
      answer:
        "Consultation charges are not published on this website. Please contact the clinic on WhatsApp or by phone to confirm the current fee before your visit.",
      cta: {
        label: "Enquire about charges",
        href: "https://wa.me/919198246238",
        external: true,
      },
    },
  ] as FaqItem[],
  pendingApprovals: [
    "Doctor's verified qualifications and professional experience.",
    "Confirmed consultation fee.",
    "Official clinic logo, if one exists.",
    "Approved patient reviews or testimonials.",
    "Verified list of clinic equipment and treatment facilities.",
    "Confirmation of individual service availability.",
    "Authenticity approval for the supplied doctor portrait and treatment-room image.",
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/#home", section: "home" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Services", href: "/#services", section: "services" },
  { label: "Our Doctor", href: "/#doctor", section: "doctor" },
  { label: "Facilities", href: "/#facilities", section: "facilities" },
  { label: "Contact", href: "/#contact", section: "contact" },
] as const;

export const serviceOptions = [
  ...clinic.services.map((service) => service.title),
  "General physiotherapy enquiry",
  "Other concern",
];
