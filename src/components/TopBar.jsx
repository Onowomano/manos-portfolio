import { NavLink } from "react-router-dom";
import { navLinks } from "../data/home";
import { useScrolled } from "../hooks/useScrolled";
import { useWatTime } from "../hooks/useWatTime";
import { useTheme } from "../hooks/useTheme";

function NavItem({ link }) {
  if (link.href.startsWith("/")) {
    return (
      <NavLink
        to={link.href}
        end={link.href === "/"}
        className={({ isActive }) =>
          `link-underline whitespace-nowrap ${isActive ? "text-text-tertiary" : "text-text-secondary"}`
        }
      >
        {link.label}
      </NavLink>
    );
  }
  return (
    <a
      href={link.href}
      {...(link.label === "Resume" || link.label === "Github"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="link-underline whitespace-nowrap text-text-secondary"
    >
      {link.label}
    </a>
  );
}

function ThemeToggleIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="6"
        cy="6"
        r="5.375"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M6 0.625a5.375 5.375 0 0 1 0 10.75V0.625z" fill="currentColor" />
    </svg>
  );
}

export default function TopBar() {
  const scrolled = useScrolled();
  const time = useWatTime();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-1">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[96px] bg-gradient-to-b from-bg-surface via-bg-surface/80 to-transparent md:hidden"
      />
      <div className="relative flex items-start justify-between px-[16px] pt-[20px] md:px-[56px] md:pt-[30px]">
        <nav className="relative text-link-sm pointer-events-auto">
          <div
            className={`flex flex-col items-start gap-[10px] transition-all duration-300 ease-out md:opacity-100 md:translate-y-0 md:pointer-events-auto ${
              scrolled
                ? "pointer-events-none -translate-y-[6px] opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </div>
          <div
            className={`absolute left-0 top-0 flex items-center gap-[12px] transition-all delay-100 duration-300 ease-out md:hidden ${
              scrolled
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-[6px] opacity-0"
            }`}
          >
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </div>
        </nav>

        <div className="flex items-center text-link-sm text-text-primary pointer-events-auto">
          <p
            className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-out md:mr-[4px] md:max-w-[100px] md:opacity-100 ${
              scrolled
                ? "mr-0 max-w-0 opacity-0"
                : "mr-[4px] max-w-[100px] opacity-100"
            }`}
          >
            {time} <span className="text-text-tertiary">WAT</span>
          </p>
          <button
            type="button"
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
            className="flex items-center p-[4px] text-text-tertiary"
          >
            <ThemeToggleIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
