"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Typography } from "@mui/material";

import moonImg from "@/assets/moon.png";
import peakImg from "@/assets/peak.png";
import mountainsImg from "@/assets/mountains.png";
import slowShootingStar from "@/assets/slowshootingstar.json";
import Lottie from "lottie-react";

import FlashingStars from "@/components/FlashingStars";
import ShootingStars from "@/components/ShootingStars";
import "./component.css";

export default function WelcomeSection() {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      let moon = document.getElementById("moon") as HTMLElement;
      let mountains = document.getElementById("mountains") as HTMLElement;

      if (moon && mountains) {
        // Tells the browser animate stuff before the next repaint. Good to do this instead of just directly adjusting properties.
        window.requestAnimationFrame(() => {
          moon.style.top = value * 0.6 + "px";
          mountains.style.top = value * 0.25 + "px";
        });
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
        <Lottie
          animationData={slowShootingStar}
          loop={true}
          autoplay={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        />
        <ShootingStars />
        <Image
          src={moonImg}
          alt="Moon"
          id="moon"
          className="image"
          data-scroll
          data-scroll-speed="0.6"
        />
        <Image src={peakImg} alt="Peak" id="peak" className="image" />
        <Image
          src={mountainsImg}
          alt="Mountains"
          id="mountains"
          className="image"
          data-scroll
          data-scroll-speed="0.25"
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
