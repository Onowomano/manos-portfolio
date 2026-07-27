import Gallery from './Gallery';

export default function ProjectCard({ title, description, badge, images, href }) {
  return (
    <div className="flex flex-col gap-[26px]">
      <Gallery images={images} badge={badge} />
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
