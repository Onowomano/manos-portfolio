import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DownLine } from "@mingcute/react";
import { navLinks } from "../data/home";
import { useScrolled } from "../hooks/useScrolled";
import { useWatTime } from "../hooks/useWatTime";
import { useTheme } from "../hooks/useTheme";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

function isLinkActive(link, pathname) {
  if (!link.href.startsWith("/")) return false;
  if (link.href === "/") return pathname === "/";
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

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

function DropdownMenuItem({ link, active, onNavigate }) {
  const className = `w-full whitespace-nowrap rounded-[4px] p-[8px] text-link-sm text-text-secondary ${
    active ? "bg-bg-primary" : ""
  }`;

  if (link.href.startsWith("/")) {
    return (
      <NavLink
        to={link.href}
        end={link.href === "/"}
        onClick={onNavigate}
        className={className}
      >
        {link.label}
      </NavLink>
    );
  }
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={className}
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
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeLink =
    navLinks.find((link) => isLinkActive(link, pathname)) ?? navLinks[0];

  useOnClickOutside(dropdownRef, () => setMenuOpen(false), menuOpen);

  useEffect(() => {
    if (!scrolled) setMenuOpen(false);
  }, [scrolled]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-bg-surface via-bg-surface/80 to-transparent md:hidden"
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
            ref={dropdownRef}
            className={`absolute left-0 top-0 transition-all delay-100 duration-300 ease-out md:hidden ${
              scrolled
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-[6px] opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={menuOpen}
              className="flex items-center rounded-[4px] bg-bg-primary py-[4px] pl-[6px] pr-[2px] text-link-sm text-text-secondary"
            >
              <span className="whitespace-nowrap">{activeLink.label}</span>
              <DownLine
                aria-hidden="true"
                className={`size-[14px] shrink-0 transition-transform duration-200 ease-out ${
                  menuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              inert={!menuOpen}
              className={`absolute left-0 top-full mt-[7.5px] flex w-[123px] flex-col items-start rounded-[6px] border border-border-secondary bg-bg-surface p-[3px] transition-all duration-150 ease-out ${
                menuOpen
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
              style={{
                transformOrigin: "top left",
                boxShadow:
                  "0px 16px 8px rgba(0,0,0,0.06), 0px 2px 4px rgba(0,0,0,0.08)",
              }}
            >
              {navLinks.map((link) => (
                <DropdownMenuItem
                  key={link.label}
                  link={link}
                  active={link === activeLink}
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center text-link-sm text-text-primary pointer-events-auto">
          <p className="mr-[4px] whitespace-nowrap">
            {time} <span className="text-text-tertiary">WAT</span>
          </p>
          <button
            type="button"
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
            className="flex items-center p-[4px] text-text-tertiary cursor-pointer"
          >
            <ThemeToggleIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
