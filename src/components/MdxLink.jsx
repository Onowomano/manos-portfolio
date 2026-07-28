import { Link } from "react-router-dom";

function isInternalHref(href = "") {
  return href.startsWith("/") || href.startsWith("#");
}

export default function MdxLink({ href = "", children, ...rest }) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} className="link-underline" {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-underline"
      {...rest}
    >
      {children}
    </a>
  );
}
