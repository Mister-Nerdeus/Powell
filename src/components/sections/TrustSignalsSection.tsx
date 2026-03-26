import { trustItems } from '../../data/trust';

export function TrustSignalsSection() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {trustItems.map((item) => (
        <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-2xl font-bold text-amber-300">{item.value}</div>
          <div className="mt-1 text-sm text-stone-300">{item.label}</div>
        </div>
      ))}
    </section>
  );
}
