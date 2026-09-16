import {
  SITE_INFO,
  SITE_ASSETS,
  COMPANY_INFO,
  LINE_URL,
  SNS_LINKS,
  normalizePathname,
} from "../constants/site";
import { PAGE_SEO, RECRUIT } from "../data/content";

export const ogImageUrl = `${SITE_INFO.url}${SITE_ASSETS.ogp}`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 628;

const ORG_ID = `${SITE_INFO.url}/#organization`;
const SITE_ID = `${SITE_INFO.url}/#website`;

const PAGE_GRAPH = {
  "/philosophy": { type: "AboutPage", name: PAGE_SEO.philosophy.title },
  "/message": { type: "AboutPage", name: PAGE_SEO.message.title },
  "/people": { type: "CollectionPage", name: PAGE_SEO.people.title },
  "/recruit": { type: "CollectionPage", name: PAGE_SEO.recruit.title },
  "/contact": { type: "ContactPage", name: PAGE_SEO.contact.title },
} as const;

const sameAs = SNS_LINKS.filter((sns) => sns.href.startsWith("http")).map(
  (sns) => sns.href,
);

const address = {
  "@type": "PostalAddress",
  postalCode: COMPANY_INFO.postalCodeValue,
  addressRegion: COMPANY_INFO.addressRegion,
  addressLocality: COMPANY_INFO.addressLocality,
  streetAddress: COMPANY_INFO.streetAddress,
  addressCountry: "JP",
};

export const buildPageTitle = (title?: string) =>
  title ? `${title} | ${SITE_INFO.title}` : `${SITE_INFO.title}｜${SITE_INFO.tagline}`;

export const buildCanonical = (pathname: string) => {
  const path = normalizePathname(pathname);
  return path === "/" ? `${SITE_INFO.url}/` : `${SITE_INFO.url}${path}/`;
};

const organizationLd = () => ({
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE_INFO.title,
  alternateName: "Noah",
  url: SITE_INFO.url,
  logo: {
    "@type": "ImageObject",
    url: ogImageUrl,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
  },
  image: ogImageUrl,
  description: SITE_INFO.description,
  slogan: SITE_INFO.tagline,
  founder: {
    "@type": "Person",
    name: COMPANY_INFO.president,
    jobTitle: "代表取締役",
  },
  address,
  telephone: COMPANY_INFO.telephone,
  areaServed: {
    "@type": "AdministrativeArea",
    name: `${COMPANY_INFO.addressRegion}${COMPANY_INFO.addressLocality}`,
  },
  knowsAbout: COMPANY_INFO.business.map((item) => item.name),
  sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: COMPANY_INFO.telephone,
      availableLanguage: ["Japanese"],
      url: LINE_URL,
    },
  ],
});

const breadcrumbLd = (canonical: string, pageName: string) => ({
  "@type": "BreadcrumbList",
  "@id": `${canonical}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: SITE_INFO.title,
      item: `${SITE_INFO.url}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: canonical,
    },
  ],
});

const recruitListLd = (canonical: string) => ({
  "@type": "ItemList",
  "@id": `${canonical}#jobs`,
  name: "募集職種",
  itemListElement: RECRUIT.jobs.map((job, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: job.title,
    description: job.description,
    url: `${SITE_INFO.url}/recruit/#${job.id}`,
  })),
});

export const buildJsonLd = ({
  title,
  description,
  canonical,
  pathname,
}: {
  title: string;
  description: string;
  canonical: string;
  pathname: string;
}) => {
  const path = normalizePathname(pathname);
  const page = Object.hasOwn(PAGE_GRAPH, path)
    ? PAGE_GRAPH[path as keyof typeof PAGE_GRAPH]
    : undefined;
  const graph: Record<string, unknown>[] = [
    organizationLd(),
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_INFO.url,
      name: SITE_INFO.title,
      description: SITE_INFO.description,
      inLanguage: "ja",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": page?.type ?? "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: "ja",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImageUrl,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
      },
      ...(page ? { breadcrumb: { "@id": `${canonical}#breadcrumb` } } : {}),
    },
  ];

  if (page) graph.push(breadcrumbLd(canonical, page.name));
  if (path === "/recruit") graph.push(recruitListLd(canonical));

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};
