export default function ListRow({ title, meta, href }) {
  return (
    <div className="flex items-start gap-[12px] text-link-md">
      <a
        href={href ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline min-w-px flex-1 text-text-primary"
      >
        {title}
      </a>
      <p className="shrink-0 whitespace-nowrap text-text-tertiary">{meta}</p>
    </div>
  );
}
