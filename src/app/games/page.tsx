"use client";

import GameGrid from "@/components/GameGrid";

import "../../app/bttn.css";
import "./module.css";

export default function Games() {
  const games = [
    {
      title: "Game A",
      thumbnailUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Game B",
      thumbnailUrl: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div>
      <GameGrid games={games} />
    </div>
  );
}
