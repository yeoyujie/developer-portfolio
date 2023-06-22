import { ReactNode, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import "./component.css";
import { StaticImageData } from "next/image";

interface SocialCardProps {
  href: string;
  handle: string;
  children: ReactNode;
  pngSrc: StaticImageData;
}

const SocialCard = ({ href, handle, children, pngSrc }: SocialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="social-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        <div className="handle">{handle}</div>
        {isHovered ? (
          <IconButton href={href} className="icon-button">
            {children}
          </IconButton>
        ) : (
          <img src={pngSrc.src} alt="" className="png-image" />
        )}
      </CardContent>
    </Card>
  );
};

export default SocialCard;
