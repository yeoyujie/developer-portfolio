"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Typography } from "@mui/material";

import moonImg from "@/assets/moon.png";
import peakImg from "@/assets/peak.png";
import mountainsImg from "@/assets/mountains.png";
import shootingStar from "@/assets/shootingstar.json";
import slowShootingStar from "@/assets/shootingstar2.json";
import fastShootingStar from "@/assets/shootingstar3.json";
import Lottie from "lottie-react";

import FlashingStars from "@/components/FlashingStars";
import ShootingStars from "@/components/ShootingStars";
import "./component.css";

export default function WelcomeSection() {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      let moon = document.getElementById("moon");
      let mountains = document.getElementById("mountains");

      if (moon && mountains) {
        moon.style.top = value * 0.6 + "px";
        mountains.style.top = value * 0.25 + "px";
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
        <ShootingStars fastShootingStar={fastShootingStar}/>
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
