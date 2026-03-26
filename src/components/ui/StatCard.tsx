type Props = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="text-2xl font-bold text-amber-300">{value}</div>
      <div className="mt-1 text-sm text-stone-300">{label}</div>
    </div>
  );
}
