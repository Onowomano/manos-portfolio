import { contactLinks } from "../data/home";

export default function BottomLinks() {
  return (
    <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[8px] px-4 pb-10 md:mx-0 md:w-auto md:max-w-none md:fixed md:bottom-[30px] md:left-[56px] md:px-0 md:pb-0">
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
