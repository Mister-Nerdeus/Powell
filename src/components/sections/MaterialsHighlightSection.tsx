import { materials } from '../../data/materials';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';

export function MaterialsHighlightSection() {
  return (
    <section className="border-y border-white/10 bg-stone-900/50 py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Materials delivered"
          title="Give gravel, topsoil, stone, and other materials a direct path to the phone"
          body="This section is intentionally simple. It supports fast comprehension and a fast call instead of pretending to be an ecommerce catalog."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {materials.map((material) => (
            <div key={material.name} className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-100">
              {material.name}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
