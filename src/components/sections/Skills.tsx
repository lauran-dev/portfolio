import { skills, orderByPriority } from "@/lib/data";
import { skillIcons } from "@/lib/skillIcons";

type SkillsProps = {
  order?: string[];
};

export function Skills({ order }: SkillsProps = {}) {
  const orderedSkills = orderByPriority(skills, (group) => group.category, order);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border bg-muted/40 py-20"
    >
      <div className="section-container">
        <div className="flex items-center gap-4">
          <h2
            id="skills-heading"
            className="shrink-0 text-xl font-semibold uppercase tracking-wide text-primary"
          >
            Skills
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orderedSkills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-md"
            >
              <h3 className="font-medium text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {Icon && <Icon aria-hidden="true" className="size-3.5" />}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
