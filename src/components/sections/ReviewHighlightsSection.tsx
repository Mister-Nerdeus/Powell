import { trustData } from "../../data/trust";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function ReviewHighlightsSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading title="Recent Customer Feedback" />
        <div className="grid gap-4 md:grid-cols-2">
          {trustData.reviews.map((review) => (
            <blockquote key={review.quote} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-700">"{review.quote}"</p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {review.author} - {review.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
