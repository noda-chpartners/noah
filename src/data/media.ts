import type { ImageMetadata } from "astro";
import heroImage from "../assets/images/hero.png";
import { SERVICES } from "./content";

import galleryTeam from "../assets/gallery/gallery03.jpg";
import galleryWork from "../assets/gallery/gallery04.jpg";
import galleryPeace from "../assets/gallery/gallery06.jpg";
import galleryGather from "../assets/gallery/gallery07.jpg";
import gallerySofa from "../assets/gallery/gallery08.jpg";
import galleryCafe from "../assets/gallery/gallery09.jpg";
import galleryLounge from "../assets/gallery/gallery010.jpg";
import galleryChat from "../assets/gallery/gallery011.jpg";
import galleryPortrait from "../assets/gallery/gallery012.jpg";
import galleryJenga from "../assets/gallery/gallery013.jpg";
import galleryTalk from "../assets/gallery/gallery014.jpg";

import eventDinner from "../assets/eventGallery/631309317601755545.jpg";
import eventBbq from "../assets/eventGallery/631309317735973394.jpg";
import eventSports from "../assets/eventGallery/631309317752750676.jpg";
import eventTrip from "../assets/eventGallery/631309318037963299.jpg";

export const HERO_SLIDES: ImageMetadata[] = [
  heroImage,
  ...SERVICES.map((service) => service.image),
];

export const GALLERY_PHOTOS = [
  { src: galleryTeam, alt: "Noahのメンバー", area: "team" },
  { src: galleryWork, alt: "打ち合わせの様子", area: "work" },
  { src: galleryCafe, alt: "カフェスペースでの作業", area: "cafe" },
  { src: galleryJenga, alt: "オフィスでの交流", area: "play" },
  { src: galleryTalk, alt: "1対1の対話", area: "talk" },
  { src: galleryLounge, alt: "ラウンジでの作業", area: "lounge" },
  { src: gallerySofa, alt: "ソファでの会話", area: "sofa" },
  { src: galleryGather, alt: "社内の食事会", area: "gather" },
  { src: galleryPortrait, alt: "メンバーのポートレート", area: "portrait" },
  { src: galleryPeace, alt: "メンバーのひとコマ", area: "peace" },
  { src: galleryChat, alt: "ソファでの歓談", area: "chat" },
] as const;

export const MARQUEE_PHOTOS = [
  { src: eventDinner, alt: "懇親会の様子" },
  { src: galleryTeam, alt: "Noahのメンバー" },
  { src: eventBbq, alt: "バーベキュー交流" },
  { src: galleryWork, alt: "打ち合わせの様子" },
  { src: eventSports, alt: "スポーツ交流" },
  { src: eventTrip, alt: "合宿のひとコマ" },
] as const;
