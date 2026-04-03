import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { landHighlights } from '../data/land';
import { Button } from '../components/ui/Button';
import { company } from '../data/company';
import { ResponsiveImage } from '../components/ui/ResponsiveImage';
import { Seo } from '../components/seo/Seo';

export default function Land() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="Land & Property Questions | Powell's Land Development"
        description="Use this page to start a land or property conversation connected to Powell's Land Development LLC and the broader Powell business footprint."
      />
      <SectionHeading
        eyebrow="Land & property"
        title="A direct inquiry page for lots, acreage, and land-development questions"
        body="This page gives Powell’s land and property activity a cleaner place on the site without taking attention away from excavation, delivered materials, and the core local service work."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <ResponsiveImage imageKey="fallback-sitework" fallbackLabel="Land and property" className="min-h-[320px] powell-panel" />
        <div className="powell-panel rounded-[2rem] p-6 lg:p-8">
          <div className="text-lg font-semibold text-white">{company.landDivisionName}</div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
            {landHighlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
            <Button to="/contact" variant="secondary">
              General Contact
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
