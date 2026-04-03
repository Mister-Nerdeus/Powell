import { serviceGroups } from '../../data/services';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function ServicesOverviewSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="What people call Powell’s for most"
          title="The core jobs that move a property project forward"
          body="Lead with the work customers usually need solved first: excavation, site prep, septic and drainfield support, driveways, grading, materials, and direct office contact when a property question comes up."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((group) => (
            <article key={group.title} className="powell-panel rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{group.fit}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/services">View Services</Button>
        </div>
      </PageContainer>
    </section>
  );
}
