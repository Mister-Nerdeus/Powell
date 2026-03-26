import { whyChooseItems } from '../../data/trust';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyChooseSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Why Powell’s"
          title="Public business history, direct contact, and clearer local buying paths"
          body="This section should feel less like website explanation and more like a reason to trust the business enough to call."
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
