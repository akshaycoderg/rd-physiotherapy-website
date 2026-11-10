import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Doctor } from "@/components/sections/Doctor";
import { Facilities } from "@/components/sections/Facilities";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { Appointment } from "@/components/sections/Appointment";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { clinic } from "@/data/clinic";
import { siteUrl, siteDescription, siteName } from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#clinic`,
    name: clinic.name,
    alternateName: clinic.shortName,
    description: siteDescription,
    url: siteUrl,
    telephone: "+919198246238",
    image: [`${siteUrl}/images/og-image.jpg`],
    logo: `${siteUrl}/icon.svg`,
    hasMap: clinic.mapsUrl,
    sameAs: [clinic.mapsUrl],
    medicalSpecialty: "Physiotherapy",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.streetAddress,
      addressLocality: clinic.address.locality,
      addressRegion: clinic.address.region,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Varanasi",
    },
    openingHoursSpecification: clinic.hours.map((hour) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hour.day,
      opens: hour.opens,
      closes: hour.closes,
    })),
    employee: {
      "@type": "Person",
      name: clinic.doctor.name,
      jobTitle: clinic.doctor.profession,
    },
    availableService: clinic.services.map((service) => ({
      "@type": "MedicalTherapy",
      name: service.title,
      description: service.description,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en-IN",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <About />
      <Services />
      <Doctor />
      <Facilities />
      <WhyChooseUs />
      <Reviews />
      <Faq />
      <Appointment />
      <Contact />
    </>
  );
}
