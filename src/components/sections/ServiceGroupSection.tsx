import type { ServiceGroup } from '../../types/site';
import { ResponsiveImage } from '../ui/ResponsiveImage';

type Props = {
  group: ServiceGroup;
  index?: number;
};

export function ServiceGroupSection({ group, index = 0 }: Props) {
  const reverse = index % 2 === 1;

  return (
    <article className={`overflow-hidden rounded-[2rem] ${reverse ? 'powell-panel-warm' : 'powell-panel'} grid lg:grid-cols-[0.96fr_1.04fr]`}>
      <div className={reverse ? 'order-2 lg:order-1' : ''}>
        <ResponsiveImage imageKey={group.imageKey} fallbackLabel={group.title} className="min-h-[300px] rounded-none border-none" />
      </div>
      <div className={`p-6 lg:p-8 ${reverse ? 'order-1 lg:order-2' : ''}`}>
        <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
        <p className="mt-3 text-sm leading-7 text-stone-300">{group.intro}</p>
        <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-7 text-amber-100">
          {group.fit}
        </div>
        <ul className="mt-5 grid gap-2 text-sm text-stone-200 sm:grid-cols-2">
          {group.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
