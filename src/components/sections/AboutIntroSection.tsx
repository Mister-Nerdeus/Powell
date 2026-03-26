import { company } from '../../data/company';

export function AboutIntroSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">About Powell’s</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">A grounded business story that supports trust without overselling</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
        {company.intro} This demo packages that story into a cleaner, more modern first impression while keeping the copy conservative and locally credible.
      </p>
    </section>
  );
}
