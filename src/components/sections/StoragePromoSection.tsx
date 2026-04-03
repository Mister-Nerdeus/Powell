import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { PageContainer } from '../layout/PageContainer';

export function StoragePromoSection() {
  return (
    <section className="powell-section-band py-16 sm:py-20">
      <PageContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Storage units</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple storage pricing and a current public deal without burying the main business</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
              Powell’s also markets storage publicly. The site should make that secondary line feel real and easy to use: visible sizes, simple pricing, and a direct call path for availability.
            </p>
          </div>
          <div className="powell-panel-warm rounded-[2rem] p-6 lg:p-8">
            <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
              Public storage promo: 1st month free on 12 months
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-stone-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">10 x 10 • $65</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">10 x 15 • $80</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">10 x 20 • $95</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">10 x 25 • $120</div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button to="/storage">See storage</Button>
              <Button href={company.phoneHref} variant="secondary">Call {company.phoneDisplay}</Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
