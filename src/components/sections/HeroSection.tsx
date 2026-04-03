import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { PageContainer } from '../layout/PageContainer';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 py-16 sm:py-20 lg:py-24">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="powell-chip text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
              Howard City • excavation • driveways • materials • storage
            </p>
            <h1 className="powell-underline mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {company.heroHeadline}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">{company.heroSubheadline}</p>
            <div className="mt-6 grid gap-3 text-sm text-stone-200 sm:grid-cols-2">
              <div className="powell-panel rounded-2xl px-4 py-3">Call about excavation, grading, driveways, site prep, water lines, and the practical property work that keeps projects moving.</div>
              <div className="powell-panel-sand rounded-2xl px-4 py-3">Call about road gravel, topsoil, stone, mulch, millings, storage-unit pricing, or a land and property question.</div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </div>
            <div className="mt-7 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">42+ years shown publicly</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">A+ BBB rating shown publicly</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Howard City, Michigan office</div>
            </div>
          </div>
          <ResponsiveImage imageKey="hero-current-1" fallbackLabel="Powell image coming soon." className="min-h-[380px] powell-panel-warm" />
        </div>
      </PageContainer>
    </section>
  );
}
