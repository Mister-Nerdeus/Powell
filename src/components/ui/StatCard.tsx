type Props = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: Props) {
  return (
    <div className="powell-panel rounded-3xl p-5 backdrop-blur">
      <div className="text-2xl font-bold text-amber-300">{value}</div>
      <div className="mt-1 text-sm text-stone-300">{label}</div>
    </div>
  );
}
