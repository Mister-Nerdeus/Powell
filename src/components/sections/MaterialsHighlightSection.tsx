import { materials } from '../../data/materials';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';

export function MaterialsHighlightSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Delivered materials"
          title="Road gravel, topsoil, sand, stone, mulch, and other materials with a direct path to the phone"
          body="The materials section is built to help customers quickly see what Powell’s can supply, then call to talk through quantity, delivery, and fit for the job."
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
