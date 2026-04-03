import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { storageNotes, storageUnits } from '../data/storage';
import { company } from '../data/company';
import { Button } from '../components/ui/Button';
import { ResponsiveImage } from '../components/ui/ResponsiveImage';
import { Seo } from '../components/seo/Seo';

export default function Storage() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="Storage Units | Powell's Excavating & Septic"
        description="View Powell's storage unit sizes and public monthly rates, then call the Howard City office to ask about availability and move-in timing."
      />
      <SectionHeading
        eyebrow="Storage units"
        title="Simple storage pricing with a direct path to the office"
        body="Powell’s also offers storage units. Keep it straightforward: public monthly pricing, a visible current deal, and a direct call path for availability and move-in timing."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <ResponsiveImage imageKey="storage-current-1" fallbackLabel="Storage" className="min-h-[320px] powell-panel" />
        <div className="powell-panel-warm rounded-[2rem] p-6 lg:p-8">
          <div className="mb-4 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
            2026 deal shown publicly: 1st month free on 12 months
          </div>
          <div className="grid gap-3">
            {storageUnits.map((unit) => (
              <div key={unit.size} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-semibold text-white">{unit.size}</div>
                <div className="text-amber-300">{unit.monthlyRate}</div>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-2 text-sm leading-7 text-stone-300">
            {storageNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
            <Button to="/contact" variant="secondary">
              Contact Powell’s
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
