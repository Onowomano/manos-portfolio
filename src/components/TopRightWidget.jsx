import { useWatTime } from '../hooks/useWatTime';
import { useTheme } from '../hooks/useTheme';

function ThemeToggleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="5.375" stroke="currentColor" strokeWidth="1.25" />
      <path d="M6 0.625a5.375 5.375 0 0 1 0 10.75V0.625z" fill="currentColor" />
    </svg>
  );
}

export default function TopRightWidget() {
  const time = useWatTime();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-[30px] right-[56px] flex items-center gap-[4px] text-link-sm text-text-primary">
      <p className="whitespace-nowrap">
        {time} <span className="text-text-tertiary">WAT</span>
      </p>
      <button
        type="button"
        aria-label="Toggle theme"
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        className="flex items-center p-[4px] text-text-tertiary"
      >
        <ThemeToggleIcon />
      </button>
    </div>
  );
}
