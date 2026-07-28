import MdxLink from "../components/MdxLink";

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
