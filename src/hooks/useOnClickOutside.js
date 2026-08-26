import { useEffect, useRef } from 'react';

export function useOnClickOutside(ref, handler, enabled = true) {
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!enabled) return;

    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handlerRef.current(event);
      }
    }

    document.addEventListener('mousedown', handleClick, { passive: true });
    document.addEventListener('touchstart', handleClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, enabled]);
}
