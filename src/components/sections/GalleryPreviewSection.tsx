import { galleryItems } from '../../data/gallery';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

export function GalleryPreviewSection() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Visual proof"
          title="A cleaner proof layer for materials, storage, land, and the broader Powell business"
          body="A contractor site needs visible proof, not just better wording. This section gives the homepage a stronger visual layer so the business feels more real, more established, and easier to trust."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {galleryItems.slice(0, 3).map((item, index) => (
            <article key={item.title} className={`${index === 1 ? 'powell-panel-warm' : 'powell-panel'} overflow-hidden rounded-[2rem]`}>
              <ResponsiveImage imageKey={item.imageKey} fallbackLabel={item.title} className="min-h-[240px] rounded-none border-none" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-300">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/gallery">Open the gallery</Button>
          <Button to="/about" variant="secondary">Why Powell’s</Button>
        </div>
      </PageContainer>
    </section>
  );
}
