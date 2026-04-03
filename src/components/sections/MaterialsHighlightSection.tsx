import { materials } from '../../data/materials';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function MaterialsHighlightSection() {
  return (
    <section className="powell-section-sand py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Delivered materials"
          title="Road gravel, topsoil, stone, mulch, millings, and bulk material options with a much cleaner call path"
          body="The materials side of Powell’s is already strong publicly. The site should make it obvious that customers can call, ask what fits the job, and move directly into quantity and delivery questions."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {materials.slice(0, 4).map((material, index) => (
            <div key={material.name} className={`${index % 2 === 0 ? 'powell-panel' : 'powell-panel-sand'} rounded-3xl p-5`}>
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
