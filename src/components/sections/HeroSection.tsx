import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { PageContainer } from '../layout/PageContainer';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/60 py-14 sm:py-18 lg:py-24">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200 sm:text-sm">
              Howard City • Excavation • Materials • Storage
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {company.heroHeadline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">{company.heroSubheadline}</p>
            <div className="mt-6 grid gap-3 text-sm text-stone-200 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Call for excavation, septic, driveways, grading, ponds, and site work.</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Call for topsoil, sand, stone, road gravel, crushed concrete, and millings.</div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={company.phoneHref}>{company.phoneDisplay}</Button>
              <Button to="/materials" variant="secondary">
                View Materials
              </Button>
            </div>
          </div>
          <ResponsiveImage
            imageKey="hero-current-1"
            fallbackLabel="Powell image coming soon."
            className="min-h-[320px] shadow-soft"
          />
        </div>
      </PageContainer>
    </section>
  );
}
