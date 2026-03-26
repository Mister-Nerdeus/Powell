import { materials } from '../../data/materials';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function MaterialsGridSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {materials.map((material) => (
        <article key={material.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70">
          <ResponsiveImage imageKey={material.imageKey} fallbackLabel={material.name} className="min-h-[240px] rounded-none border-none" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{material.name}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">{material.description}</p>
            <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
              {material.fit}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
