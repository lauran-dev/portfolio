import { projects, orderByPriority } from "@/lib/data";

type ProjectsProps = {
  order?: string[];
};

export function Projects({ order }: ProjectsProps = {}) {
  const orderedProjects = orderByPriority(projects, (project) => project.title, order);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border bg-muted/40 py-20"
    >
      <div className="section-container">
        <div className="flex items-center gap-4">
          <h2
            id="projects-heading"
            className="shrink-0 text-xl font-semibold uppercase tracking-wide text-primary"
          >
            Projects
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Selected work from product teams I&apos;ve been part of. These
          products and their code are owned by the respective companies and
          clients, not by me.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orderedProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-md"
            >
              <h3 className="font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
