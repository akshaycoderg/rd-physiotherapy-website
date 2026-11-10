import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function NotFound() {
  return (
    <div className="section">
      <div className="container-page max-w-2xl text-center">
        <p className="eyebrow justify-center">Page not found</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-muted">
          The page may have moved, or the link may be incorrect. You can return
          to the clinic homepage or contact the clinic directly.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn btn-primary btn-lg"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <a
            href={clinic.contact.phoneHref}
            className="btn btn-outline btn-lg"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call the clinic
          </a>
        </div>
      </div>
    </div>
  );
}
