import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Africa/Lagos',
  hour: 'numeric',
  minute: '2-digit',
});

function formatWatTime() {
  return formatter.format(new Date()).replace(' ', '').toUpperCase();
}

export function useWatTime() {
  const [time, setTime] = useState(formatWatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatWatTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}
