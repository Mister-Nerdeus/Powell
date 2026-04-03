import { whyChooseItems } from '../../data/trust';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyChooseSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Why Powell’s"
          title="A stronger local presentation built around trust, direct contact, and practical work"
          body="Powell’s already has the public business history and service breadth. The website should make that easier to feel at a glance, easier to trust, and easier to call."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyChooseItems.map((item) => (
            <div key={item} className="powell-panel-warm rounded-3xl p-6 text-sm leading-7 text-stone-200">
              {item}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
