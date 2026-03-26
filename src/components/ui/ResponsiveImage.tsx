import { useMemo, useState } from 'react';
import { findImageByKey } from '../../data/images';

type Props = {
  imageKey?: string;
  fallbackLabel: string;
  className?: string;
  imgClassName?: string;
};

export function ResponsiveImage({ imageKey, fallbackLabel, className = '', imgClassName = '' }: Props) {
  const image = useMemo(() => findImageByKey(imageKey), [imageKey]);
  const [failed, setFailed] = useState(false);

  if (!image || image.status === 'ignore' || image.status === 'missing' || failed) {
    return (
      <div
        className={`flex min-h-[220px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950/40 p-6 text-center text-sm leading-6 text-stone-300 ${className}`}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-3xl border border-white/10 bg-stone-900 ${className}`}>
      <img
        src={image.path}
        alt={image.alt}
        className={`h-full w-full object-cover ${imgClassName}`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
