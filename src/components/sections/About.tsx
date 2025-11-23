import { profile } from "@/lib/data";

type AboutProps = {
  intro?: string;
};

export function About({ intro }: AboutProps = {}) {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20">
      <div className="section-container">
        <div className="flex items-center gap-4">
          <h2
            id="about-heading"
            className="shrink-0 text-xl font-semibold uppercase tracking-wide text-primary"
          >
            About
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <div className="mt-4 max-w-3xl space-y-4">
          {intro && (
            <p className="text-lg text-muted-foreground text-pretty">
              {intro}
            </p>
          )}
          {(intro ? profile.about.slice(1) : profile.about).map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-lg text-muted-foreground text-pretty"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
