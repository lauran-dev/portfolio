import { FaGraduationCap } from "react-icons/fa";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-20">
      <div className="section-container">
        <div className="flex items-center gap-4">
          <h2
            id="education-heading"
            className="shrink-0 text-xl font-semibold uppercase tracking-wide text-primary"
          >
            Education
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <li
              key={`${item.school}-${item.start}`}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <FaGraduationCap
                  aria-hidden="true"
                  className="size-6 text-primary"
                />
                <div>
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.start} &ndash; {item.end} &middot; {item.location}
                  </p>
                </div>
              </div>
              {item.awards && item.awards.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {item.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
