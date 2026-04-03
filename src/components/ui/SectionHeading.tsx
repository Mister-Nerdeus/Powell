type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export function SectionHeading({ eyebrow, title, body }: Props) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-stone-300 sm:text-lg">{body}</p>
    </div>
  );
}
