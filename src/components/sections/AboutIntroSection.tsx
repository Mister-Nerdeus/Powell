import { company } from '../../data/company';

export function AboutIntroSection() {
  return (
    <section className="powell-panel-warm rounded-[2rem] p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">About Powell’s</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">An established Howard City business built around practical property work</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
        {company.intro} Powell’s public business identity is broader than one service line: excavation, materials, storage, and property questions all flow back to the same local office.
      </p>
    </section>
  );
}
