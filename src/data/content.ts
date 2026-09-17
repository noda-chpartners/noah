import insideSales from "../assets/service/service01.png";
import webMarketing from "../assets/service/service02.png";
import videoEditing from "../assets/service/service03.png";
import consulting from "../assets/service/service04.png";

export const HERO = {
  catch: "HEAD OUT.",
  sub: "出発しよう。",
} as const;

export const SECTION = {
  about: { title: "ABOUT" },
  service: { label: "Our Service", title: "Service" },
  company: { label: "Overview", title: "Company" },
  contact: {
    label: "Get in touch",
    title: "Contact",
    note: "お気軽にご連絡ください。",
  },
} as const;

export const ABOUT = {
  quote: "出発点は、いつも人。",
  lead: "株式会社Noahは、インサイドセールス、WEBマーケティング、動画編集、コンサルティングを通じて、事業の成長と人の挑戦を同時に支える会社です。",
  text: "成果の数字と、挑戦する人が自分の足で立てるようになること。その両方を、同じ熱量で扱っています。\nまだ小さな組織だからこそ、お客様との距離は近く、意思決定は速い。机上の戦略ではなく、現場で動ける形にして、次の一歩を一緒にデザインします。",
} as const;

export const PHILOSOPHY = {
  label: "Our Beliefs",
  title: "Philosophy",
  lead: "私たちが目指すものと、\n大切にしていること。",
  vision: {
    title: "VISION",
    subtitle: "「自分の人生を、自分で選べる人を増やす」",
    text: "会社や環境に人生を決められるのではなく、自分の力で選択肢を増やし、自分らしいキャリアや生き方を選べる社会を目指します。",
  },
  mission: {
    title: "MISSION",
    subtitle: "「挑戦する人を、未来へ運ぶ」",
    text: "一人ひとりの可能性を信じ、挑戦するための環境と機会をつくる。経験を力に変え、自分自身の未来を切り拓ける人を増やします。",
  },
  value: {
    title: "VALUE",
    subtitle: "「成長を、仲間と。」",
    text: "挑戦・成長・信頼を大切にし、一人ひとりの成長を仲間で支える。自分だけが成長するのではなく、仲間とともに高め合い、次の未来へ進み続けます。",
  },
} as const;

export const MESSAGE = {
  label: "Top Message",
  title: "Message",
  role: "代表取締役",
  text: `はじめまして。代表の佐々木です。

私は以前、タレントのマネージャーとして働いていました。
忙しい日々の中で、「もっと自由に生きたい」と思い、フリーランスへ転身。
しかし、そこでも仕事や締切に追われ、思うような自由は得られませんでした。
「自分の人生を自分でつくりたい」と考え、独立を決意しました。

Noahの強みは、未経験からでも実践を通して総合的なスキルを身につけられる環境があることです。

ただ働くだけではなく、仕事を通して「自分で稼ぐ力」を身につけ、将来の選択肢を増やしていく。

そんな環境を、仲間と一緒につくっていきたいと思っています。`,
} as const;

export const PEOPLE = {
  label: "Members",
  title: "People",
  lead: "仕事も、余白も、同じ温度で。",
  text: "挑戦する仲間の顔と、日常の風景です。肩書きよりも、隣にいる人の熱量を大切にしています。",
} as const;

export const SERVICES = [
  {
    id: "web-marketing",
    title: "WEBマーケティング",
    tag: "DIGITAL",
    description: "認知から獲得まで、成果に直結するデジタル施策を設計・実行。見る人の行動が変わる導線をつくります。",
    image: webMarketing,
  },
  {
    id: "inside-sales",
    title: "インサイドセールス",
    tag: "SALES",
    description: "対話を設計し、商談につながる接点をつくる。見込み顧客との関係を、数字と温度感の両方で育てます。",
    image: insideSales,
  },
  {
    id: "video",
    title: "動画編集",
    tag: "VISUAL",
    description: "伝えたいことを、見て残る映像に。ブランドの温度感を、テンポと余白で表現します。",
    image: videoEditing,
  },
  {
    id: "consulting",
    title: "コンサルティング",
    tag: "GROWTH",
    description: "現場と並走しながら、成長のボトルネックを解きほぐす。机上の戦略ではなく、動ける形に落とします。",
    image: consulting,
  },
] as const;

const EMPLOYMENT = {
  type: "正社員 / 業務委託",
  location: "東京都豊島区（リモート相談可）",
} as const;

const JOB_COPY = {
  "inside-sales":
    "対話を設計し、商談につながる接点をつくる。見込み顧客との関係を、数字と温度感の両方で育てる仕事です。",
  "web-marketing":
    "認知から獲得まで、成果に直結するデジタル施策を設計・実行。見る人の行動が変わる導線をつくる仕事です。",
  video:
    "伝えたいことを、見て残る映像にする。ブランドの温度感を、テンポと余白で表現する仕事です。",
  consulting:
    "現場と並走しながら、成長のボトルネックを解きほぐす。机上の戦略ではなく、動ける形に落とす仕事です。",
} as const satisfies Record<(typeof SERVICES)[number]["id"], string>;

export const RECRUIT = {
  title: "Recruit",
  label: "Join us",
  lead: "一緒に挑戦する仲間を募集しています。",
  text: "会社や環境に人生を決められるのではなく、自分の力で選択肢を増やせる人を増やしたい。その想いに共感し、並走してくれる方を待っています。",
  applyHref: "/contact?type=recruit",
  features: {
    label: "Our Features",
    title: "挑戦が、選択肢に変わる場所。",
    lead: "株式会社Noahで働く理由を、3つにまとめました。",
    items: [
      {
        tag: "PRACTICE",
        title: "未経験から、現場で身につける",
        text: "学歴や経歴よりも、現場で動けることを大切にしています。インサイドセールス、WEBマーケティング、動画編集、コンサルティング。実践を重ねながら、仕事で使える力を総合的に育てていきます。",
      },
      {
        tag: "TOGETHER",
        title: "一人で抱えず、仲間と伸びる",
        text: "まだ小さな組織だからこそ、距離は近く、相談は速い。成果も、つまずきも、隣にいる人と分け合える。自分だけが前に進むのではなく、仲間と高め合いながら次の一歩を踏み出します。",
      },
      {
        tag: "CHOICE",
        title: "「稼ぐ力」が、次の選択肢になる",
        text: "ただ業務をこなすのではなく、仕事を通して自分で稼ぐ力を蓄えていく。会社や環境に人生を決められるのではなく、自分の足で立てるようになること。そのための経験を、ここで積んでほしいと思っています。",
      },
    ],
  },
  jobs: SERVICES.map((service) => ({
    id: service.id,
    title: service.title,
    tag: service.tag,
    type: EMPLOYMENT.type,
    location: EMPLOYMENT.location,
    description: JOB_COPY[service.id],
  })),
};

export const CONTACT_TYPES = [
  { value: "service", label: "サービスについてのご相談" },
  { value: "recruit", label: "採用について" },
  { value: "other", label: "その他" },
] as const;

export const PAGE_SEO = {
  home: {
    description:
      "株式会社Noahは東京都豊島区池袋の会社です。WEBマーケティング、インサイドセールス、動画編集、コンサルティングで、挑戦する人を未来へ運びます。",
  },
  philosophy: {
    title: "企業理念",
    description:
      "株式会社Noahの企業理念。VISION「自分の人生を自分で選べる人を増やす」、MISSION「挑戦する人を、未来へ運ぶ」、VALUE「成長を、仲間と。」",
  },
  message: {
    title: "代表者挨拶",
    description:
      "株式会社Noah 代表取締役 佐々木遥の挨拶。未経験から実践でスキルを身につけ、自分で稼ぐ力と将来の選択肢を増やせる環境づくりを目指しています。",
  },
  people: {
    title: "社員紹介",
    description:
      "株式会社Noahの社員紹介。仕事も余白も同じ温度で、挑戦する仲間の顔と日常の風景をお届けします。東京都豊島区。",
  },
  recruit: {
    title: "採用情報",
    description:
      "株式会社Noahの採用情報。未経験から現場で学び、仲間と成長しながら自分で稼ぐ力を身につける。WEBマーケティング、インサイドセールス、動画編集、コンサルティングを募集しています。",
  },
  contact: {
    title: "お問い合わせ",
    description:
      "株式会社Noahへのお問い合わせ。WEBマーケティング、インサイドセールス、採用のご相談はフォーム、LINE、または電話（070-6664-5375）へ。東京都豊島区池袋。",
  },
} as const;
