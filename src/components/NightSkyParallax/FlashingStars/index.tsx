import Image from "next/image";
import { forwardRef } from "react";
import star1Img from "@/assets/stars/star1.png";
import star2Img from "@/assets/stars/star2.png";
import star3Img from "@/assets/stars/star3.png";
import star4Img from "@/assets/stars/star4.png";
import star5Img from "@/assets/stars/star5.png";
import star6Img from "@/assets/stars/star6.png";
import { Box } from "@mui/material";
import "./components.css";

const FlashingStars = forwardRef((props, ref) => {
  return (
      <Box className="section">
        <Image src={star1Img} alt="Star" id="star1" className="starImage" />
        <Image src={star2Img} alt="Star" id="star2" className="starImage" />
        <Image src={star3Img} alt="Star" id="star3" className="starImage" />
        <Image src={star4Img} alt="Star" id="star4" className="starImage" />
        <Image src={star5Img} alt="Star" id="star5" className="starImage" />
        <Image src={star6Img} alt="Star" id="star6" className="starImage" />
      </Box>
  );
});

export default FlashingStars;