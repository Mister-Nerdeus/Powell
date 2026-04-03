import { materials } from '../../data/materials';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function MaterialsHighlightSection() {
  return (
    <section className="powell-section-band py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Delivered materials"
          title="Road gravel, topsoil, stone, mulch, millings, and other materials arranged around the call"
          body="Powell’s public business footprint already supports the materials side strongly. This section should make it obvious that customers can call, ask what fits the job, and move straight to delivery questions."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {materials.slice(0, 4).map((material) => (
            <div key={material.name} className="powell-panel rounded-3xl p-5">
              <div className="text-lg font-semibold text-white">{material.name}</div>
              <p className="mt-2 text-sm leading-7 text-stone-300">{material.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/materials">See materials</Button>
          <Button to="/contact" variant="secondary">Call about delivery</Button>
        </div>
      </PageContainer>
    </section>
  );
}
