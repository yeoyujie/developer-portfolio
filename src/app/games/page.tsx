"use client";

import GameGrid from "@/components/GameGrid";

import countryFlagImg from "@/assets/country-flags.jpg";
import comingSoonImg from "@/assets/coming-soon.jpg";

import "../../app/bttn.css";
import "./module.css";

export default function Games() {
  const games = [
    {
      title: "Guess the Country",
      thumbnailSrc: countryFlagImg,
      href: "/games/guess-the-country",
    },
    {
      title: "Coming Soon",
      thumbnailSrc: comingSoonImg,
      href: "/games/coming-soon",
    },
    {
      title: "Game C",
      thumbnailSrc: comingSoonImg,
      href: "/games/coming-soon",
    },
    {
      title: "Game D",
      thumbnailSrc: comingSoonImg,
      href: "/games/coming-soon",
    },
  ];

  return (
    <div>
      <GameGrid games={games} />
    </div>
  );
}
