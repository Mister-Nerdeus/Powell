import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-8 ${alignClass}`}>
      {eyebrow ? <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-600">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-700">{description}</p> : null}
    </div>
  );
}
