import { Link } from "react-router-dom";

export default function NoteRow({ title, date, to }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-[2px] md:gap-[12px] text-link-md">
      <p className="shrink-0 whitespace-nowrap text-text-tertiary">{date}</p>
      <Link
        to={to}
        className="link-underline min-w-px flex-1 text-text-primary"
      >
        {title}
      </Link>
    </div>
  );
}
