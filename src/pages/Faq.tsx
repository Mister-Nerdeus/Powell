import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { faqItems } from '../data/faq';
import { Seo } from '../components/seo/Seo';

export default function Faq() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="FAQ | Powell's Excavating & Septic"
        description="Read common questions about Powell's services, septic scope, delivered materials, storage, and what to have ready when you call."
      />
      <SectionHeading
        eyebrow="FAQ"
        title="Useful answers before you call"
        body="FAQ should reduce friction: what Powell’s handles, what not to call about, what materials to ask for, and what information helps the office answer faster."
      />
      <div className="mt-10 space-y-4">
        {faqItems.map((item) => (
          <section key={item.question} className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">{item.question}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{item.answer}</p>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
