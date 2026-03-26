import type { ServiceGroup } from "../../types/site";
import { PageContainer } from "../layout/PageContainer";

type ServiceGroupSectionProps = {
  group: ServiceGroup;
};

export function ServiceGroupSection({ group }: ServiceGroupSectionProps) {
  return (
    <section className="py-8">
      <PageContainer>
        <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2>
          <p className="mt-2 text-slate-700">{group.intro}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {group.bullets.map((bullet) => (
              <li key={bullet} className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-800">
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      </PageContainer>
    </section>
  );
}
