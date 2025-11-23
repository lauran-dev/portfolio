import { FaAws, FaCertificate, FaMicrosoft } from "react-icons/fa";
import { certifications, awsSkillBuilderProfileHref } from "@/lib/data";

const issuerIcons: Record<string, typeof FaAws> = {
  "Amazon Web Services": FaAws,
  Microsoft: FaMicrosoft,
};

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-20"
    >
      <div className="section-container">
        <div className="flex items-center gap-4">
          <h2
            id="certifications-heading"
            className="shrink-0 text-xl font-semibold uppercase tracking-wide text-primary"
          >
            Certifications
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = issuerIcons[cert.issuer] ?? FaCertificate;
            return (
              <li
                key={cert.name}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <Icon aria-hidden="true" className="size-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.issuer}
                      {cert.date ? <> &middot; {cert.date}</> : null}
                    </p>
                  </div>
                </div>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-9 mt-4 inline-flex w-fit shrink-0 items-center gap-1 self-start rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Show credential &rarr;
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href={awsSkillBuilderProfileHref}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-hover"
        >
          View my AWS Skill Builder profile &rarr;
        </a>
      </div>
    </section>
  );
}
