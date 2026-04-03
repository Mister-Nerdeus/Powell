import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { galleryItems } from '../data/gallery';
import { ResponsiveImage } from '../components/ui/ResponsiveImage';
import { Seo } from '../components/seo/Seo';

export default function Gallery() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="Gallery | Powell's Excavating & Septic"
        description="Browse Powell visual proof assets for materials, storage, land, and supporting property visuals across the Powell site."
      />
      <SectionHeading
        eyebrow="Gallery"
        title="A better visual proof layer for materials, storage, land, and property support"
        body="Powell’s public business footprint is broader than one service line. This gallery helps the site show materials, storage, land, and related property visuals in a cleaner, more intentional way."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item.title} className="powell-panel overflow-hidden rounded-[2rem]">
            <ResponsiveImage imageKey={item.imageKey} fallbackLabel={item.title} className="min-h-[240px] rounded-none border-none" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
