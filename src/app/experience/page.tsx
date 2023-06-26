"use client";

// import Parallax from "@/components/Parallax";
// import image from "@/assets/parallax.webp";

// export default function Experience() {
//   return (
//     <Parallax imageSrc={image} height="1500px">
//       <div>Experience Section Content</div>
//     </Parallax>
//   );
// }
import Image from "next/image";
import { Box } from "@mui/material";

import star1Img from "@/assets/stars/star1.png";
import moonImg from "@/assets/moon.png";
import peakImg from "@/assets/peak.png";
import mountainsImg from "@/assets/mountains.png";
import "./experience.css";

export default function Experience() {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let star1 = document.getElementById("star");
    let moon = document.getElementById("moon");
    let mountains = document.getElementById("mountains");

    if (star1 && moon && mountains) {
      star1.style.top = value * 0.25 + "px";
      moon.style.top = value * 0.7 + "px";
      mountains.style.top = value * 0.3 + "px";
    }
  });

  return (
    <Box className="container">
      <Image src={star1Img} alt="Star" id="star" className="image" />
      <Image src={moonImg} alt="Moon" id="moon" className="image" />
      <Image src={peakImg} alt="Peak" id="peak" className="image" />
      <Image
        src={mountainsImg}
        alt="Mountains"
        id="mountains"
        className="image"
      />
    </Box>
  );
}
