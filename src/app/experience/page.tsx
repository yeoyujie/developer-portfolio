"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";

import moonImg from "@/assets/moon.png";
import peakImg from "@/assets/peak.png";
import mountainsImg from "@/assets/mountains.png";

import FlashingStars from "@/components/FlashingStars";
import "./module.css";

export default function Experience() {

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
        <FlashingStars/>
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
      </div>
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
        <List>
          <ListItem>
            <Typography variant="h3">Apple</Typography>
            <Typography variant="body1">
            - Developed and maintained several websites for clients using WordPress, Bootstrap, jQuery and PHP. <br/>
            - Implemented responsive design, SEO best practices, accessibility features and performance optimization. <br/>
            </Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
