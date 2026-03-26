import { materials } from '../../data/materials';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function MaterialsHighlightSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Delivered materials"
          title="A cleaner first look at the materials customers are likely to ask about"
          body="The site should help users quickly confirm that Powell’s handles the material they need, then move them toward a phone call with the right details ready."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {materials.slice(0, 4).map((material) => (
            <div key={material.name} className="rounded-3xl border border-white/10 bg-stone-900/70 p-5">
              <div className="text-lg font-semibold text-white">{material.name}</div>
              <p className="mt-2 text-sm leading-7 text-stone-300">{material.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/materials">View materials</Button>
          <Button to="/contact" variant="secondary">Call with a delivery question</Button>
        </div>
      </PageContainer>
    </section>
  );
}
