import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { PageContainer } from '../layout/PageContainer';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/50 py-14 sm:py-18 lg:py-24">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="powell-chip text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
              Howard City • excavation • materials • storage • direct office contact
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {company.heroHeadline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">{company.heroSubheadline}</p>
            <div className="mt-6 grid gap-3 text-sm text-stone-200 sm:grid-cols-2">
              <div className="powell-panel rounded-2xl px-4 py-3">Call about excavation, drainfields, driveways, grading, ponds, water lines, and property work.</div>
              <div className="powell-panel rounded-2xl px-4 py-3">Call about road gravel, topsoil, stone, millings, storage, and straightforward local answers.</div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
              <Button to="/materials" variant="secondary">
                View Materials
              </Button>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-stone-400 sm:grid-cols-3">
              <div>42+ years shown publicly</div>
              <div>A+ BBB rating shown publicly</div>
              <div>Howard City, Michigan</div>
            </div>
          </div>
          <ResponsiveImage imageKey="hero-current-1" fallbackLabel="Powell image coming soon." className="min-h-[360px] powell-panel-warm" />
        </div>
      </PageContainer>
    </section>
  );
}
