"use client";

import Image from "next/image";
import { useRef, MutableRefObject } from "react";
import { Box, Typography } from "@mui/material";

import moonImg from "@/assets/moon.png";
import peakImg from "@/assets/peak.png";
import mountainsImg from "@/assets/mountains.png";

import FlashingStars from "@/components/FlashingStars";
import "./experience.css";

export default function Experience() {
  const flashingStarsRef = useRef<HTMLDivElement | null>(null);

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let moon = document.getElementById("moon");
    let mountains = document.getElementById("mountains");

    if (flashingStarsRef.current && moon && mountains) {
      flashingStarsRef.current.style.top = value * 0.25 + "px";
      moon.style.top = value * 0.7 + "px";
      mountains.style.top = value * 0.3 + "px";
    }
  });

  return (
    <>
      <Box className="container">
        <FlashingStars ref={flashingStarsRef} />
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
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Explore
        </Typography>
      </Box>
      <Box className="exp-section">
        <h2>My Experiences</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Box>
    </>
  );
}
