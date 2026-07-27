import { Link } from "react-router-dom";

function isInternalHref(href = "") {
  return href.startsWith("/") || href.startsWith("#");
}

function MdxLink({ href = "", children, ...rest }) {
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

function Heading2(props) {
  return <h2 {...props} />;
}

function Heading3(props) {
  return <h3 {...props} />;
}

function LazyImg(props) {
  return <img loading="lazy" {...props} />;
}

export const mdxComponents = {
  h1: Heading2,
  h2: Heading2,
  h3: Heading3,
  a: MdxLink,
  img: LazyImg,
};
