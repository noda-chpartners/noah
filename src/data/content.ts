import insideSales from '../assets/service/service01.png';
import webMarketing from '../assets/service/service02.png';
import videoEditing from '../assets/service/service03.png';
import consulting from '../assets/service/service04.png';


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
  text: `株式会社Noahのウェブサイトをご覧いただき、ありがとうございます。
代表の佐々木遥です。

私たちは、会社や環境に人生を決められるのではなく、自分の力で選択肢を増やせる人を増やしたいと考えています。

挑戦したい気持ちは、誰の中にもある。
その一歩を、仕組みと仲間の力で未来へ運ぶこと。それが、Noahの役割です。

まだ走り始めたばかりの会社ですが、誠実さとスピードを両立しながら、お客様と仲間の可能性を広げていきます。

どうぞ、よろしくお願いいたします。`,
} as const;

export const PEOPLE = {
  label: "Members",
  title: "People",
  lead: "仕事も、余白も、同じ温度で。",
  text: "挑戦する仲間の顔と、日常の風景です。肩書きよりも、隣にいる人の熱量を大切にしています。",
} as const;

export const SERVICES = [
  {
    id: "inside-sales",
    title: "インサイドセールス",
    tag: "SALES",
    description: "対話を設計し、商談につながる接点をつくる。見込み顧客との関係を、数字と温度感の両方で育てます。",
    image: insideSales,
  },
  {
    id: "web-marketing",
    title: "WEBマーケティング",
    tag: "DIGITAL",
    description: "認知から獲得まで、成果に直結するデジタル施策を設計・実行。見る人の行動が変わる導線をつくります。",
    image: webMarketing,
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

export const RECRUIT = {
  title: "Recruit",
  label: "Join us",
  lead: "一緒に挑戦する仲間を募集しています。",
  text: "会社や環境に人生を決められるのではなく、自分の力で選択肢を増やせる人を増やしたい。その想いに共感し、並走してくれる方を待っています。",
  jobs: [
    {
      id: "inside-sales",
      title: "インサイドセールス",
      tag: "SALES",
      type: "正社員 / 業務委託",
      location: "東京都豊島区（リモート相談可）",
      description:
        "対話を設計し、商談につながる接点をつくる。見込み顧客との関係を、数字と温度感の両方で育てる仕事です。",
    },
    {
      id: "web-marketing",
      title: "WEBマーケティング",
      tag: "DIGITAL",
      type: "正社員 / 業務委託",
      location: "東京都豊島区（リモート相談可）",
      description:
        "認知から獲得まで、成果に直結するデジタル施策を設計・実行。見る人の行動が変わる導線をつくる仕事です。",
    },
    {
      id: "video",
      title: "動画編集",
      tag: "VISUAL",
      type: "正社員 / 業務委託",
      location: "東京都豊島区（リモート相談可）",
      description:
        "伝えたいことを、見て残る映像にする。ブランドの温度感を、テンポと余白で表現する仕事です。",
    },
    {
      id: "consulting",
      title: "コンサルティング",
      tag: "GROWTH",
      type: "正社員 / 業務委託",
      location: "東京都豊島区（リモート相談可）",
      description:
        "現場と並走しながら、成長のボトルネックを解きほぐす。机上の戦略ではなく、動ける形に落とす仕事です。",
    },
  ],
} as const;

export const CONTACT_TYPES = [
  { value: "service", label: "サービスについてのご相談" },
  { value: "recruit", label: "採用について" },
  { value: "other", label: "その他" },
] as const;
