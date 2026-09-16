import logoWhite from '../assets/images/text-logo-white.png';
import logoBlack from '../assets/images/text-logo-black.png';
import logoMark from '../assets/images/logo-text-a-white.png.png';


export const SITE_INFO = {
  title: "株式会社Noah",
  description: "株式会社Noahコーポレートサイト",
  url: "https://example.com", // 要変更
} as const;

export const SITE_ASSETS = {
  logo: {
    white: logoWhite,
    black: logoBlack,
    mark: logoMark,
  },
  favicon: "/favicon-black.ico",
  ogp: "/ogp.png",
} as const;

export const NAV_ITEMS = [
  { href: "#about",   label: "ABOUT" },
  { href: "#service", label: "SERVICE" },
  { href: "#company", label: "COMPANY"},
  { href: "/recruit", label: "RECRUIT"},
  { href: "/contact", label: "CONTACT" },
] as const;

export const ABOUT_PAGES = [
  { href: "/philosophy", label: "PHILOSOPHY", caption: "VISION / MISSION / VALUE" },
  { href: "/message", label: "MESSAGE", caption: "代表者挨拶" },
  { href: "/people", label: "PEOPLE", caption: "社員紹介" },
] as const;

export const resolveNavHref = (href: string, pathname: string) =>
  href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

export const SNS_LINKS = [
  { name: "Instagram", label: "Comming soon", href: "#", icon: "simple-icons:instagram" },
  { name: "LINE", label: "LINE", href: "#", icon: "simple-icons:line" },
] as const;

export const COMPANY_INFO = {
  postalCode: "〒170-0011",
  address:    "東京都豊島区池袋本町１−１７−４",
  president: "佐々木 遥",
  tel:        "070-6664-5375",
  telLink:    "+0817066645375",
  business: [
    { name: "インサイドセールス事業" },
    { name: "WEBマーケティング事業" },
    { name: "動画編集事業" },
    { name: "コンサルティング事業" },
  ],
} as const;