import { useMemo, useState } from 'react';
import { findImageByKey } from '../../data/images';

type Props = {
  imageKey?: string;
  fallbackLabel: string;
  className?: string;
};

export function ResponsiveImage({ imageKey, fallbackLabel, className = '' }: Props) {
  const image = useMemo(() => findImageByKey(imageKey), [imageKey]);
  const [failed, setFailed] = useState(false);

  if (!image || image.status === 'ignore' || failed || image.status === 'missing') {
    return (
      <div
        className={`flex min-h-[220px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-6 text-center text-sm leading-6 text-stone-300 ${className}`}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <img
      src={image.path}
      alt={image.alt}
      className={`h-full w-full rounded-3xl object-cover ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
