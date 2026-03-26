import { reviewSummary } from '../../data/reviews';
import { reviewThemes } from '../../data/trust';
import { PageContainer } from '../layout/PageContainer';

export function ReviewHighlightsSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <div className="mb-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Public reputation</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">A strong public reputation without invented testimonials</h2>
          <p className="mt-4 text-base leading-7 text-stone-300">
            {reviewSummary.average} • {reviewSummary.countLabel}. {reviewSummary.note}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {reviewThemes.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-stone-900/70 p-6 text-sm leading-7 text-stone-200">
              <div className="font-semibold text-white">{item.title}</div>
              <div className="mt-2 text-stone-300">{item.body}</div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
