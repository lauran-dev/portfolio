import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-muted/40 py-20"
    >
      <div className="section-container flex flex-col items-center gap-4 text-center">
        <div className="flex w-full max-w-md items-center gap-4 sm:max-w-lg">
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          <h2
            id="contact-heading"
            className="shrink-0 text-xl font-semibold uppercase tracking-wide text-primary"
          >
            Contact
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <p className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Let&apos;s work together.
        </p>
        <p className="max-w-md text-muted-foreground text-pretty">
          Open to new opportunities and interesting projects. Reach out and
          I&apos;ll get back to you as soon as I can.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <SiGmail aria-hidden="true" className="size-4" />
            {profile.email}
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <FaLinkedin aria-hidden="true" className="size-4" />
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <FaGithub aria-hidden="true" className="size-4" />
            GitHub
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <FaPhone aria-hidden="true" className="size-3.5" />
            {profile.phone}
          </a>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt aria-hidden="true" className="size-3.5" />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
