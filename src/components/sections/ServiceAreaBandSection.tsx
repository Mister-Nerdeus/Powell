import { company } from '../../data/company';
import { PageContainer } from '../layout/PageContainer';

export function ServiceAreaBandSection() {
  return (
    <section className="powell-section-band py-8">
      <PageContainer>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Howard City first</div>
            <div className="mt-2 max-w-3xl text-base leading-7 text-stone-300">
              Powell’s is positioned for Howard City and surrounding communities that need excavation, delivered materials, driveways, grading, storage, and practical property support.
            </div>
          </div>
          <div className="powell-panel rounded-2xl px-4 py-3 text-sm text-stone-200">One local office number for excavation, materials, storage, and broader property questions.</div>
          <div className="powell-panel-sand rounded-2xl px-4 py-3 text-sm text-stone-200">The goal is simple: easier to trust, easier to scan, and easier to call than the older public site.</div>
        </div>
      </PageContainer>
    </section>
  );
}
