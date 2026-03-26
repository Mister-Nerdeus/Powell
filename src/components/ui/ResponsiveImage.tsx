import type { ImgHTMLAttributes } from "react";

type ResponsiveImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export function ResponsiveImage({ alt, className = "", ...rest }: ResponsiveImageProps) {
  return <img alt={alt} className={`h-full w-full object-cover ${className}`.trim()} loading="lazy" {...rest} />;
}
