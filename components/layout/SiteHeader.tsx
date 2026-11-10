"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarCheck,
  Clock,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { clinic, navItems } from "@/data/clinic";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink, buttonClasses } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { generalEnquiryLink } from "@/lib/whatsapp";

const sectionIds = navItems.map((item) => item.section);

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const marker = window.scrollY + 150;
      let current = "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div className="hidden bg-navy text-white md:block">
        <div className="container-page flex h-9 items-center justify-between gap-6 text-[12px]">
          <p className="flex items-center gap-1.5 text-blue-100">
            <MapPin className="size-3.5 text-teal" aria-hidden="true" />
            Hyderabad Gate, Susuwahi, Varanasi
          </p>
          <div className="flex items-center gap-5">
            <p className="flex items-center gap-1.5 text-blue-100">
              <Clock className="size-3.5 text-teal" aria-hidden="true" />
              <span>Mon–Sat 9:00 AM – 8:00 PM</span>
              <span className="text-blue-300" aria-hidden="true">|</span>
              <span>Sun 9:00 AM – 12:00 PM</span>
            </p>
            <a
              href={clinic.contact.phoneHref}
              className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-blue-200"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[76px]">
          <Logo onClick={() => setMenuOpen(false)} />

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === "/" && activeSection === item.section;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-ink/80 hover:text-primary",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-primary"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={clinic.contact.phoneHref}
              aria-label={`Call the clinic on ${clinic.contact.phoneDisplay}`}
              className="hidden size-10 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:border-primary/40 hover:text-primary sm:inline-flex xl:hidden"
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>
            <a
              href={clinic.contact.phoneHref}
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-mist hover:text-primary xl:inline-flex"
            >
              <Phone className="size-4 text-primary" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>
            <ButtonLink
              href="/#appointment"
              size="sm"
              className="hidden md:inline-flex"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book Appointment
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:bg-mist lg:hidden"
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white shadow-float lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="container-page py-4">
              <div className="grid gap-1">
                {navItems.map((item) => {
                  const isActive =
                    pathname === "/" && activeSection === item.section;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary-light text-primary"
                          : "text-ink hover:bg-mist hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-2 border-t border-line pt-4 sm:grid-cols-2">
                <ButtonLink
                  href="/#appointment"
                  onClick={() => setMenuOpen(false)}
                >
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  Book Appointment
                </ButtonLink>
                <a
                  href={clinic.contact.phoneHref}
                  className={buttonClasses("outline", "md", "w-full")}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call Now
                </a>
              </div>

              <a
                href={generalEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-whatsapp transition-colors hover:bg-teal-light"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp Enquiry
              </a>

              <p className="mt-3 text-center text-xs leading-5 text-muted">
                Mon–Sat: 9:00 AM – 8:00 PM · Sun: 9:00 AM – 12:00 PM
              </p>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
