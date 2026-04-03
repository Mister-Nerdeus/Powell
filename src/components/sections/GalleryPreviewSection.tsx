import { galleryItems } from '../../data/gallery';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

export function GalleryPreviewSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <SectionHeading
          eyebrow="Visual proof"
          title="Materials, storage, land, and property visuals that make the business feel more real"
          body="Powell’s should show more than numbers. This proof layer gives the site a better visual story around materials, storage, property support, and the broader business footprint."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {galleryItems.slice(0, 3).map((item) => (
            <article key={item.title} className="powell-panel overflow-hidden rounded-[2rem]">
              <ResponsiveImage imageKey={item.imageKey} fallbackLabel={item.title} className="min-h-[220px] rounded-none border-none" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-300">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/gallery">Open the full gallery</Button>
        </div>
      </PageContainer>
    </section>
  );
}
