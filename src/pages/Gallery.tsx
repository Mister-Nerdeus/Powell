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
        description="Browse Powell visual proof assets for materials, storage, property-support imagery, and stronger supporting visuals across the Powell site."
      />
      <SectionHeading
        eyebrow="Gallery"
        title="A stronger visual proof layer for the Powell site"
        body="The repo did not have enough good, large, relevant images for every major content surface. This gallery gives the site a better proof layer using the strongest assets currently available."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70">
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
