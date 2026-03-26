import { serviceGroups } from '../../data/services';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function ServicesOverviewSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Core services"
          title="Excavation and property work presented in the order customers usually think about it"
          body="Lead with the jobs people call about first: excavation, septic systems, drainfields, driveways, grading, ponds, and practical property support."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceGroups.slice(0, 4).map((group) => (
            <div key={group.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70">
              <ResponsiveImage imageKey={group.imageKey} fallbackLabel={group.title} className="min-h-[220px] rounded-none" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{group.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-stone-200">
                  {group.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
