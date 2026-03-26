import { serviceGroups } from '../../data/services';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

export function ServicesOverviewSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="What people call Powell’s for most"
          title="The main jobs and questions the site should help users sort quickly"
          body="Keep the first pass simple: show the kinds of work people usually ask about, explain who each category fits, and give each section a real path deeper."
        />
        <div className="mt-10 grid gap-6">
          {serviceGroups.map((group, index) => (
            <article
              key={group.title}
              className={`grid overflow-hidden rounded-[2rem] border border-white/10 ${index % 2 === 0 ? 'bg-stone-900/70 lg:grid-cols-[0.95fr_1.05fr]' : 'bg-gradient-to-br from-stone-900/80 to-amber-950/30 lg:grid-cols-[1.05fr_0.95fr]'}`}
            >
              <div className={index % 2 === 0 ? '' : 'order-2 lg:order-1'}>
                <ResponsiveImage imageKey={group.imageKey} fallbackLabel={group.title} className="min-h-[260px] rounded-none border-none" />
              </div>
              <div className={`p-6 lg:p-8 ${index % 2 === 0 ? '' : 'order-1 lg:order-2'}`}>
                <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{group.intro}</p>
                <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
                  {group.fit}
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-stone-200 sm:grid-cols-2">
                  {group.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/services">See the full services page</Button>
        </div>
      </PageContainer>
    </section>
  );
}
