import { profile, resumeFileHref } from "@/lib/data";

type HeroProps = {
  title?: string;
  tagline?: string;
};

export function Hero({ title, tagline }: HeroProps = {}) {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center"
      >
        <div className="size-[36rem] rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
      </div>

      <div className="section-container relative flex min-h-[85vh] flex-col justify-center gap-6 py-20">
        <p className="text-lg font-medium uppercase tracking-widest text-primary sm:text-xl">
          {title ?? profile.title}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground text-pretty">
          {tagline ?? profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="#projects"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get in touch
          </a>
          <a
            href={resumeFileHref}
            download
            className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Download resume &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
