import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FloatingActions() {
  return (
    <>
      <a
        href={generalEnquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with R D Physiotherapy Clinic on WhatsApp"
        className="group fixed bottom-[calc(4.9rem+env(safe-area-inset-bottom))] right-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-float transition-transform duration-200 hover:scale-105 hover:bg-whatsapp-dark md:bottom-6 md:right-6"
      >
        <WhatsAppIcon className="size-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-card transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </a>

      <nav
        aria-label="Quick contact actions"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_-18px_rgb(22_59_101_/_0.35)] backdrop-blur md:hidden"
      >
        <div className="grid h-[4.25rem] grid-cols-3">
          <a
            href={clinic.contact.phoneHref}
            className="flex flex-col items-center justify-center gap-1 text-navy transition-colors hover:bg-mist"
          >
            <Phone className="size-5 text-primary" aria-hidden="true" />
            <span className="text-[11px] font-semibold">Call Now</span>
          </a>
          <a
            href={generalEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-navy transition-colors hover:bg-mist"
          >
            <WhatsAppIcon className="size-5 text-whatsapp" />
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>
          <Link
            href="/#appointment"
            className="flex flex-col items-center justify-center gap-1 border-l border-line bg-primary-light text-primary transition-colors hover:bg-blue-100"
          >
            <CalendarCheck className="size-5" aria-hidden="true" />
            <span className="text-[11px] font-semibold">Book Appointment</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
