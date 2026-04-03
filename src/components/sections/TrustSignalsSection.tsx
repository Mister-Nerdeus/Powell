import { trustItems } from '../../data/trust';

export function TrustSignalsSection() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {trustItems.map((item) => (
        <div key={item.label} className="powell-panel rounded-3xl p-6">
          <div className="text-2xl font-bold text-amber-300">{item.value}</div>
          <div className="mt-1 text-sm text-stone-300">{item.label}</div>
        </div>
      ))}
    </section>
  );
}
