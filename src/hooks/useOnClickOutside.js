import { useEffect } from 'react';

export function useOnClickOutside(ref, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, handler, enabled]);
}
