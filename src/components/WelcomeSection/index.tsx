'use client'

import Image from "next/image";
import { useEffect } from "react";
import { Typography } from "@mui/material";

import moonImg from "@/assets/moon.png";
import peakImg from "@/assets/peak.png";
import mountainsImg from "@/assets/mountains.png";

import FlashingStars from "@/components/FlashingStars";
import "./component.css"

export default function WelcomeSection() {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      let moon = document.getElementById("moon");
      let mountains = document.getElementById("mountains");

      if (moon && mountains) {
        moon.style.top = value * 0.6 + "px";
        mountains.style.top = value * 0.3 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <FlashingStars />
        <Image src={moonImg} alt="Moon" id="moon" className="image" />
        <Image src={peakImg} alt="Peak" id="peak" className="image" />
        <Image
          src={mountainsImg}
          alt="Mountains"
          id="mountains"
          className="image"
        />
        <Typography
          variant="h1"
          className="text"
          sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
        >
          Welcome
        </Typography>
      </div>
    </>
  );
}
