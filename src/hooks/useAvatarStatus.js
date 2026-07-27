import { useEffect, useState } from 'react';
import { avatarStatuses } from '../data/avatarStatuses';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Africa/Lagos',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function getWatMinutesOfDay() {
  const [hour, minute] = formatter.format(new Date()).split(':').map(Number);
  return (hour % 24) * 60 + minute;
}

function parseMinutes(time) {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
}

function isWithinSlot(minutesOfDay, { start, end }) {
  const startMinutes = parseMinutes(start);
  const endMinutes = parseMinutes(end);
  if (endMinutes <= startMinutes) {
    // Wraps past midnight, e.g. 23:30-07:49.
    return minutesOfDay >= startMinutes || minutesOfDay < endMinutes;
  }
  return minutesOfDay >= startMinutes && minutesOfDay < endMinutes;
}

function resolveStatus(minutesOfDay) {
  const match = avatarStatuses.find((status) =>
    status.slots.some((slot) => isWithinSlot(minutesOfDay, slot))
  );
  if (match) return match;

  const defaults = avatarStatuses.filter((status) => status.default);
  if (import.meta.env.DEV && defaults.length !== 1) {
    console.warn(
      `useAvatarStatus: expected exactly one status flagged \`default: true\`, found ${defaults.length}.`
    );
  }
  return defaults[0] ?? avatarStatuses[avatarStatuses.length - 1];
}

export function useAvatarStatus() {
  const [status, setStatus] = useState(() => resolveStatus(getWatMinutesOfDay()));

  useEffect(() => {
    const id = setInterval(() => setStatus(resolveStatus(getWatMinutesOfDay())), 30_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
