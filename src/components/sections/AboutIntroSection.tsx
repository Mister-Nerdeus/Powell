import { company } from '../../data/company';

export function AboutIntroSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">About Powell’s</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">An established Howard City business built around practical property work</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
        {company.intro} The goal of this site is to make those services easier to understand, easier to trust, and easier to contact on desktop and mobile.
      </p>
    </section>
  );
}
