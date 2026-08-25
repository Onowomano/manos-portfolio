// Central configuration for all case studies
// Add new case studies here - they'll automatically appear in navigation and home page

import brandKuda from "../assets/brand-kuda.svg";
import tikketThumbnail from "../assets/tikket-thumbnail.png";

export const caseStudies = [
  {
    slug: "tikket-app",
    title: "Solving Cashflow Delays for Event Organizers with Next-Day Payouts",
    labels: ["User Research", "Product Design", "Product Management"],
    categories: ["web"],
    description:
      "Tikket is a modern event management app that helps small event organizers get paid the next day. Existing ticketing platform in Nigeria have a specific pay day and that's the gap Tikket is bridging.",
    images: [{ src: tikketThumbnail, alt: "Tikket app" }],
    heroImage: "/tikket-hero.png",
    cardImage: "/Tikket-Thumbnail.png",
    liveUrl: "https://usetikket.com",
    isPasswordProtected: true,
    isCaseStudyAvailable: true,
    codeLength: 5,
    codeHashes: [
      "75bae64a11d6ea6530544e19c2eebfbc944cd3eddf8e0d0873fbfc8373ee0e50",
      "8a83cfe13bc4eec91c2efa9374606dc0bc92af67ee76569aa0c99482cf04cd47",
      "0a2e0c099f2e0bd75a7d0dc9e48bfef28b653b9e400e78235aeb3f5d98d6c48a",
      "d9665502ca32285c411c049caf61e1a962391cf7802433f7323d6fe0f1d5ddb5",
      "9a5972325d1ca2fcf3336636c590b5be0b119472cdd8e13c3baf1a62753b1401",
      "ab58b68b350d66bfc9de04487e599d52fd97983e57c5c924514a01891e82ac50",
      "1204efe8ffcd8d8af7b36f4f7b79bd08c5a50b7909050c14ec7c4b104bc668d5",
      "19f86b2807b83e8907c20b091928d1ecbf4aa0f2f0b43fed5527dbd7829a0328",
      "bdc3c567093c3d83cb9e378d36d7c0cf1be6d4268717dac60032643eb0ecbeea",
      "a6b64e9283d201454f4259189810390ae9ead2cb8537e95a1e838ec45a29418b",
      "04af1edf74ebad1fef1348430c1a1f41101c7d74d335fbb4f6ae490491bd5dae",
    ],
  },
  {
    slug: "kuda-wrapped",
    title: "#KudaWrapped2023: End of the year spending report for customers",
    labels: [
      "Product Design",
      "User Research",
      "Illustration",
      "Data Visualization",
    ],
    categories: ["web", "interactions"],
    description:
      "Sharing insights with customers on how they used Kuda in 2023, to help them better understand their relationship with money—how much they made and how they spent.",
    badge: { src: brandKuda, alt: "Kuda" },
    images: [
      { src: "/kuda-wrapped/Kuda-Warpped-Thumbnail.png", alt: "Kuda Wrapped" },
    ],
    heroImage: "/kuda-wrapped/Kuda-Warpped-Thumbnail.png",
    cardImage: "/Kuda-Thumbnail.png",
    liveUrl: "https://myendofyear.kuda.com/",
    isPasswordProtected: false,
    isCaseStudyAvailable: true,
  },
  {
    slug: "enum",
    title: "Enum—Africa's no. 1 talent match-making platform",
    labels: ["User Research", "Product Design", "Brand Design"],
    categories: ["web"],
    description:
      "Enum is an end-to-end talent matching platform that will automatically sifts through applicants and match them with the most suitable job roles for recruiters.",
    images: [{ src: "/enum/enum-hero.png", alt: "Enum" }],
    heroImage: "/enum/enum-hero.png",
    cardImage: "/Enum-Thumbnail.png",
    liveUrl: "https://enum.africa",
    isPasswordProtected: false,
    isCaseStudyAvailable: true,
  },
  {
    slug: "fmbn",
    title:
      "Simplifying Remittance of Contributions To The National Housing Fund",
    labels: ["Product Design", "Illustration", "Design Systems"],
    categories: ["web", "mobile"],
    description:
      "Making the process of contributing to the NHF scheme easier for individuals (and organizations), so individuals can access low-interest loan options for their housing needs.",
    images: [{ src: "/fmbn/fmbn-hero.png", alt: "FMBN" }],
    heroImage: "/fmbn/fmbn-hero.png",
    cardImage: "/FMBN-Thumbnail.png",
    liveUrl: null,
    isPasswordProtected: true,
    isCaseStudyAvailable: true,
    codeLength: 5,
    codeHashes: [
      "75bae64a11d6ea6530544e19c2eebfbc944cd3eddf8e0d0873fbfc8373ee0e50",
      "8a83cfe13bc4eec91c2efa9374606dc0bc92af67ee76569aa0c99482cf04cd47",
      "0a2e0c099f2e0bd75a7d0dc9e48bfef28b653b9e400e78235aeb3f5d98d6c48a",
      "d9665502ca32285c411c049caf61e1a962391cf7802433f7323d6fe0f1d5ddb5",
      "9a5972325d1ca2fcf3336636c590b5be0b119472cdd8e13c3baf1a62753b1401",
      "ab58b68b350d66bfc9de04487e599d52fd97983e57c5c924514a01891e82ac50",
      "1204efe8ffcd8d8af7b36f4f7b79bd08c5a50b7909050c14ec7c4b104bc668d5",
      "19f86b2807b83e8907c20b091928d1ecbf4aa0f2f0b43fed5527dbd7829a0328",
      "bdc3c567093c3d83cb9e378d36d7c0cf1be6d4268717dac60032643eb0ecbeea",
      "a6b64e9283d201454f4259189810390ae9ead2cb8537e95a1e838ec45a29418b",
      "04af1edf74ebad1fef1348430c1a1f41101c7d74d335fbb4f6ae490491bd5dae",
    ],
  },
  {
    slug: "kuda-ds",
    title: "Building Kuda's First Design System",
    labels: ["Product Design", "Design Systems", "UX Audit"],
    categories: ["web", "mobile"],
    description:
      "Kuda, the money app for Africans provides financial solutions for over 7 million customers in Nigeria. I created a system that helps manage the different products, their files organization and workflow structure.",
    badge: { src: brandKuda, alt: "Kuda" },
    images: [{ src: "/kuda-ds/Kuda-DS-hero.png", alt: "Kuda Design System" }],
    heroImage: "/kuda-ds/Kuda-DS-hero.png",
    cardImage: "/Kuda-DS-Thumbnail.png",
    liveUrl: null,
    isPasswordProtected: false,
    isCaseStudyAvailable: true,
  },
  // {
  //   slug: 'houseparty',
  //   title: "Houseparty: Redefining Social Interactions in a Virtual Space",
  //   labels: ['Product Design', 'Engineering', 'Product Management', 'UX Research'],
  //   description: 'Kuda, the money app for Africans provides financial solutions for over 7 million customers in Nigeria. I created a system that helps manage the different products, their files organization and workflow structure.',
  //   heroImage: '/kuda-ds/Kuda-DS-hero.png',
  //   cardImage: '/Kuda-DS-Thumbnail.png',
  //   liveUrl: null,
  //   isPasswordProtected: false,
  //   isCaseStudyAvailable: true,
  //   password: null,
  // }
];

// MDX case study bodies, keyed by slug (filename). Loaded lazily so protected
// case studies aren't shipped to the client until they're unlocked.
const caseStudyModules = import.meta.glob("../case-studies/*.mdx");
const bodyLoaderBySlug = Object.fromEntries(
  Object.entries(caseStudyModules).map(([path, loadModule]) => {
    const slug = path.replace(/^.*\//, "").replace(/\.mdx$/, "");
    return [slug, loadModule];
  }),
);

// Helper function to get a case study by slug, with its MDX body loader attached
export const getCaseStudyBySlug = (slug) => {
  const study = caseStudies.find((entry) => entry.slug === slug);
  return study ? { ...study, loadBody: bodyLoaderBySlug[slug] } : undefined;
};

// Helper function to get next and previous case studies (cycles through all)
export const getAdjacentCaseStudies = (currentSlug) => {
  const currentIndex = caseStudies.findIndex(
    (study) => study.slug === currentSlug,
  );
  const totalStudies = caseStudies.length;

  // Cycle to last item if at the beginning, cycle to first item if at the end
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : totalStudies - 1;
  const nextIndex = currentIndex < totalStudies - 1 ? currentIndex + 1 : 0;

  return {
    previous: caseStudies[previousIndex],
    next: caseStudies[nextIndex],
  };
};

// Helper to get all case studies for listing pages
export const getAllCaseStudies = () => caseStudies;
