import { whyChooseItems } from '../../data/trust';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Why Powell’s"
          title="A stronger local impression built around trust, practical work, and one direct office number"
          body="Powell’s already has the public business history and the service breadth. The website should help that land faster: established, local, useful, and easier to call than the old presentation."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyChooseItems.map((item, index) => (
            <div key={item} className={`${index === 1 ? 'powell-panel-warm' : 'powell-panel'} rounded-3xl p-6 text-sm leading-7 text-stone-200`}>
              {item}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
