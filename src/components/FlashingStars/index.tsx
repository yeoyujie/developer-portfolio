import Image from "next/image";
import star1Img from "@/assets/stars/star1.png";
import star2Img from "@/assets/stars/star2.png";
import star3Img from "@/assets/stars/star3.png";
import star4Img from "@/assets/stars/star4.png";
import star5Img from "@/assets/stars/star5.png";
import star6Img from "@/assets/stars/star6.png";
import star7Img from "@/assets/stars/star7.png";
import star8Img from "@/assets/stars/star8.png";
import { Box } from "@mui/material";

export default function FlashingStars() {
  return (
    <>
      <Box className="section">
        <Image src={star1Img} alt="Star" id="star1" className="image" />
        <Image src={star2Img} alt="Star" id="star2" className="image" />
        <Image src={star3Img} alt="Star" id="star3" className="image" />
        <Image src={star4Img} alt="Star" id="star4" className="image" />
        <Image src={star5Img} alt="Star" id="star5" className="image" />
        <Image src={star6Img} alt="Star" id="star6" className="image" />
        <Image src={star7Img} alt="Star" id="star7" className="image" />
        <Image src={star8Img} alt="Star" id="star8" className="image" />
      </Box>
    </>
  );
}
