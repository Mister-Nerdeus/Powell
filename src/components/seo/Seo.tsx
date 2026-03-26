import { useEffect } from 'react';

type Props = {
  title: string;
  description: string;
};

export function Seo({ title, description }: Props) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, attribute: 'name' | 'property') => {
      const selector = `meta[${attribute}="${name}"]`;
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      return element;
    };

    ensureMeta('description', 'name').setAttribute('content', description);
    ensureMeta('og:title', 'property').setAttribute('content', title);
    ensureMeta('og:description', 'property').setAttribute('content', description);
  }, [description, title]);

  return null;
}
