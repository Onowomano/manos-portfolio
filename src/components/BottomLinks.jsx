import { contactLinks } from "../data/home";

export default function BottomLinks() {
  return (
    <div className="fixed bottom-[30px] left-[16px] md:left-[56px] flex flex-col items-start gap-[8px]">
      <p className="text-body-sm text-text-tertiary">Get in touch</p>
      <div className="flex items-start gap-[12px] text-link-sm text-text-secondary">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
