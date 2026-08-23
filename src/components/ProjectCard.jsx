import { Link } from 'react-router-dom';
import Gallery from './Gallery';

export default function ProjectCard({ title, description, badge, images, href, to }) {
  return (
    <div className="flex flex-col gap-[26px]">
      <Gallery images={images} badge={badge} showArrows={false} />
      <div className="flex flex-col gap-[4px]">
        {to ? (
          <Link to={to} className="link-underline text-link-md text-text-primary">
            {title}
          </Link>
        ) : (
          <a
            href={href ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-link-md text-text-primary"
          >
            {title}
          </a>
        )}
        <p className="text-body-sm text-text-tertiary">{description}</p>
      </div>
    </div>
  );
}
