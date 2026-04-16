import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = el.querySelectorAll<HTMLElement>('.scroll-reveal');
    elements.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
