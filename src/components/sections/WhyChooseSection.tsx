import { whyChooseItems } from '../../data/trust';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyChooseSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Why customers use this site"
          title="Fast answers, clear service paths, and a better first impression"
          body="The goal is straightforward: make Powell’s easier to understand, easier to trust, and easier to contact from any device."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyChooseItems.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-stone-300">
              {item}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
