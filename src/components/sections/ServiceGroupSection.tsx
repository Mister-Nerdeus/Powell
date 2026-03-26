import type { ServiceGroup } from '../../types/site';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function ServiceGroupSection({ group }: { group: ServiceGroup }) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70">
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <ResponsiveImage
          imageKey={group.imageKey}
          fallbackLabel={`Add a stronger Powell image for “${group.title}” to replace this placeholder panel.`}
          className="min-h-[260px] rounded-none"
        />
        <div className="p-6 lg:p-8">
          <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
          <p className="mt-3 text-sm leading-7 text-stone-300">{group.intro}</p>
          <ul className="mt-5 space-y-2 text-sm text-stone-200">
            {group.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
