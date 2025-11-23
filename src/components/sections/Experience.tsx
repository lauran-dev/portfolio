import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20">
      <div className="section-container">
        <div className="flex items-center gap-4">
          <h2
            id="experience-heading"
            className="shrink-0 text-xl font-semibold uppercase tracking-wide text-primary"
          >
            Experience
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <ol className="mt-8 space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.start}`}
              className="relative rounded-r-xl border-l-2 border-border py-3 pl-6 pr-4 transition-colors hover:border-primary hover:bg-accent"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.title}
                </h3>
                <span className="w-fit rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-primary">
                  {job.start} &ndash; {job.end}
                </span>
              </div>
              <p className="text-sm font-medium text-primary">
                {job.company}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {job.highlights.map((highlight) => (
                  <li key={highlight.slice(0, 32)}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
