import { materials } from '../../data/materials';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function MaterialsGridSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {materials.map((material) => (
        <article key={material.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70">
          <ResponsiveImage
            imageKey={material.imageKey}
            fallbackLabel={`Drop an image for ${material.name} into public/images/current to strengthen this card.`}
            className="min-h-[220px] rounded-none"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{material.name}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">{material.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
