import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <FaGithub aria-hidden="true" className="size-4" />
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <FaLinkedin aria-hidden="true" className="size-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <SiGmail aria-hidden="true" className="size-4" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
