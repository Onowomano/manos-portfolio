import { NavLink } from "react-router-dom";
import { navLinks } from "../data/home";

export default function TopLinks() {
  return (
    <nav className="fixed top-[30px] left-[16px] md:left-[56px] flex flex-col items-start gap-[10px] text-link-sm">
      {navLinks.map((link) => {
        if (link.href.startsWith("/")) {
          return (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `link-underline ${isActive ? "text-text-tertiary" : "text-text-secondary"}`
              }
            >
              {link.label}
            </NavLink>
          );
        }
        return (
          <a
            key={link.label}
            href={link.href}
            {...(link.label === "Resume"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="link-underline text-text-secondary"
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
