import { serviceGroups } from '../../data/services';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function ServicesOverviewSection() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="What people call Powell’s for most"
          title="The work that usually starts the phone call"
          body="Lead with the jobs local property owners most often need solved first: excavation, site prep, drainfield support, driveways, grading, delivered materials, and a clear direct path to the office."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((group, index) => (
            <article key={group.title} className={`${index % 2 === 0 ? 'powell-panel' : 'powell-panel-warm'} rounded-[2rem] p-6`}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Core service</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{group.title}</h3>
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
