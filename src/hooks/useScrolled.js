import { useEffect, useState } from 'react';

const DEFAULT_THRESHOLD = 24;

export function useScrolled(threshold = DEFAULT_THRESHOLD) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
