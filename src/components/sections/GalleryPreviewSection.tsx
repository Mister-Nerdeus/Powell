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
          title="A stronger proof layer built from the images already available in the repo"
          body="The current site needs more than metrics. It needs visible support: materials, storage, land-support visuals, and stronger image use across the main pages."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {galleryItems.slice(0, 3).map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70">
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
