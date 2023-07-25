"use client";

import GameGrid from "@/components/GameGrid";

import countryFlagImg from "@/assets/country-flags.jpg";
import inProgressAnimationData from "@/assets/inprogress.json";

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
      animationData: inProgressAnimationData,
      href: "/games/coming-soon",
    },
    {
      title: "Coming Soon",
      animationData: inProgressAnimationData,
      href: "/games/coming-soon",
    },
    {
      title: "Coming Soon",
      animationData: inProgressAnimationData,
      href: "/games/coming-soon",
    },
  ];

  return (
    <div>
      <GameGrid games={games} />
    </div>
  );
}
