import { reviewHighlights } from '../../data/trust';
import { PageContainer } from '../layout/PageContainer';

export function ReviewHighlightsSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <div className="grid gap-4 md:grid-cols-3">
          {reviewHighlights.map((item) => (
            <blockquote key={item} className="rounded-3xl border border-white/10 bg-stone-900/70 p-6 text-sm leading-7 text-stone-200">
              “{item}”
            </blockquote>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
