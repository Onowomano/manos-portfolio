export default function PersonalCard({ title, description, image, href }) {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="aspect-video w-full overflow-hidden rounded-[6px] bg-bg-primary">
        <img src={image.src} alt={image.alt} className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[4px]">
        <a
          href={href ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-link-md text-text-primary"
        >
          {title}
        </a>
        <p className="text-body-sm text-text-tertiary">{description}</p>
      </div>
    </div>
  );
}
