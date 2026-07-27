import kudaMockup from "../assets/kuda-mockup.png";
import kudaImage1 from "../assets/Image-01.png";
import kudaImage2 from "../assets/Image-02.png";
import kudaImage3 from "../assets/Image-03.png";
import brandKuda from "../assets/brand-kuda.svg";
import brandSemicolon from "../assets/brand-semicolon.svg";
import personalBankLogos from "../assets/bank-logos-thumbnail.png";
import personalTikket from "../assets/tikket-thumbnail.png";
import { siteLinks } from "./links";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Case studies", href: "#" },
  { label: "Notes", href: "/notes" },
  { label: "Resume", href: siteLinks.resume },
  { label: "Github", href: siteLinks.github },
];

export const contactLinks = [
  { label: "Linkedin", href: siteLinks.linkedin },
  { label: "Email", href: siteLinks.email },
];

export const workProjects = [
  {
    title: "Kuda",
    description:
      "Kuda is building banking without the limitations of legacy banks. I design user experiences for Kuda's credit products and maintain the design system.",
    badge: { src: brandKuda, alt: "Kuda" },
    images: [
      { src: kudaImage1, alt: "Kuda app screen 1" },
      { src: kudaImage2, alt: "Kuda app screen 2" },
      { src: kudaImage3, alt: "Kuda app screen 3" },
    ],
    href: "https://kuda.com",
  },
  {
    title: "Semicolon",
    description:
      "Semicolon is training the next generation of S/W engineers. I led the design of a talent management tool.",
    badge: { src: brandSemicolon, alt: "Semicolon" },
    images: [],
    href: "https://www.semicolon.africa",
  },
];

export const personalProjects = [
  {
    title: "Nigerian Bank Logos",
    description:
      "A free, open source collection of 500+ Nigerian bank logos for web & mobile apps.",
    image: { src: personalBankLogos, alt: "Nigerian Bank Logos" },
    href: "https://www.figma.com/community/file/1646585282227125344/nigerian-bank-logos",
  },
  {
    title: "Tikket",
    description:
      "An event ticketing app that helps organizers get their ticket payouts the next day.",
    image: { src: personalTikket, alt: "Tikket" },
    href: "https://usetikket.com",
  },
];

export const playgroundItems = [
  {
    title: "Paystack Checkout UI",
    year: "2026",
    href: "https://www.figma.com/community/file/1601734514354861616/paystack-ng-checkout-ui-2026-mobile-web",
  },
  {
    title: "Houseparty",
    year: "2026",
    href: "https://houseparty-creator.vercel.app",
  },
];

export const articles = [
  {
    title: "Design systems are essentially documentation",
    readTime: "6 mins read",
    href: "https://onowomano.medium.com/design-systems-are-essentially-documentation-and-i-can-explain-a2ae52100afa",
  },
  {
    title: "Redesigning the shopping cart experience",
    readTime: "4 mins read",
    href: "https://onowomano.medium.com/redesigning-the-shopping-cart-experience-b798523c6e4",
  },
];

export const sayHello = {
  email: siteLinks.email,
  linkedin: siteLinks.linkedin,
};
