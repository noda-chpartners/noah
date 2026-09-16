import { SITE_INFO, SITE_ASSETS, COMPANY_INFO, normalizePathname } from "../constants/site";

export const ogImageUrl = `${SITE_INFO.url}${SITE_ASSETS.ogp}`;

export const buildPageTitle = (title?: string) =>
  title ? `${title} | ${SITE_INFO.title}` : `${SITE_INFO.title}｜${SITE_INFO.tagline}`;

export const buildCanonical = (pathname: string) => {
  const path = normalizePathname(pathname);
  return path === "/" ? `${SITE_INFO.url}/` : `${SITE_INFO.url}${path}/`;
};

export const buildJsonLd = ({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_INFO.url}/#organization`,
      name: SITE_INFO.title,
      url: SITE_INFO.url,
      logo: ogImageUrl,
      description: SITE_INFO.description,
      founder: {
        "@type": "Person",
        name: COMPANY_INFO.president,
      },
      address: {
        "@type": "PostalAddress",
        postalCode: COMPANY_INFO.postalCodeValue,
        addressRegion: COMPANY_INFO.addressRegion,
        addressLocality: COMPANY_INFO.addressLocality,
        streetAddress: COMPANY_INFO.streetAddress,
        addressCountry: "JP",
      },
      telephone: COMPANY_INFO.telephone,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_INFO.url}/#website`,
      url: SITE_INFO.url,
      name: SITE_INFO.title,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_INFO.url}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: "ja",
      isPartOf: { "@id": `${SITE_INFO.url}/#website` },
    },
  ],
});
