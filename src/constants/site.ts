import logoMark from "../assets/images/logo-text-a-white.png.png";
import { SITE_URL } from "./url";

export const SITE_INFO = {
  title: "株式会社Noah",
  tagline: "挑戦する人を、未来へ運ぶ",
  description:
    "株式会社Noahは、インサイドセールス、WEBマーケティング、動画編集、コンサルティングを通じて、事業の成長と人の挑戦を同時に支える会社です。東京都豊島区。",
  url: SITE_URL,
} as const;

export const SITE_ASSETS = {
  logo: {
    mark: logoMark,
  },
  favicon: "/favicon-black.ico",
  ogp: "/ogp.png",
} as const;

export const NAV_ITEMS = [
  { href: "#about", label: "ABOUT" },
  { href: "#service", label: "SERVICE" },
  { href: "#company", label: "COMPANY" },
  { href: "/recruit", label: "RECRUIT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const ABOUT_PAGES = [
  { href: "/philosophy", label: "PHILOSOPHY", caption: "VISION / MISSION / VALUE" },
  { href: "/message", label: "MESSAGE", caption: "代表者挨拶" },
  { href: "/people", label: "PEOPLE", caption: "社員紹介" },
] as const;

export const FOOTER_NAV = [
  NAV_ITEMS[0],
  ...ABOUT_PAGES,
  ...NAV_ITEMS.slice(1),
];

export const normalizePathname = (pathname: string) =>
  pathname.replace(/\/+$/, "") || "/";

export const isHomePath = (pathname: string) => normalizePathname(pathname) === "/";

export const resolveNavHref = (href: string, pathname: string) =>
  href.startsWith("#") && !isHomePath(pathname) ? `/${href}` : href;

export const padIndex = (index: number, digits = 2) =>
  String(index).padStart(digits, "0");

export const SNS_LINKS = [
  { name: "Instagram", label: "Comming soon", href: "#", icon: "simple-icons:instagram" },
  { name: "LINE", label: "LINE", href: "#", icon: "simple-icons:line" },
] as const;

const POSTAL_CODE = "170-0011";
const ADDRESS_REGION = "東京都";
const ADDRESS_LOCALITY = "豊島区";
const ADDRESS_STREET = "池袋本町１−１７−４";

export const COMPANY_INFO = {
  postalCode: `〒${POSTAL_CODE}`,
  postalCodeValue: POSTAL_CODE,
  addressRegion: ADDRESS_REGION,
  addressLocality: ADDRESS_LOCALITY,
  streetAddress: ADDRESS_STREET,
  address: `${ADDRESS_REGION}${ADDRESS_LOCALITY}${ADDRESS_STREET}`,
  president: "佐々木 遥",
  tel: "070-6664-5375",
  telLink: "+0817066645375",
  telephone: "+81-70-6664-5375",
  business: [
    { name: "WEBマーケティング事業" },
    { name: "インサイドセールス事業" },
    { name: "動画編集事業" },
    { name: "コンサルティング事業" },
  ],
} as const;
