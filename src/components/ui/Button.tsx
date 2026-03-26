import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary";

const classesByVariant: Record<ButtonVariant, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-700",
  secondary: "bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-100",
};

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export function Button(props: PropsWithChildren<LinkButtonProps | NativeButtonProps>) {
  if ("href" in props && props.href) {
    const { variant = "primary", className = "", children, href, ...rest } = props;
    const base = `inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${classesByVariant[variant]} ${className}`;
    return (
      <a className={base} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { variant = "primary", className = "", children, ...buttonProps } = props as NativeButtonProps;
  const base = `inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${classesByVariant[variant]} ${className}`;

  return (
    <button className={base} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
