import { useEffect, useRef } from 'react';

export default function RevealOnScroll({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    root && root.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}
