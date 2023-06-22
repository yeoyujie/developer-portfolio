import { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import "./component.css";

interface SocialCardProps {
  href: string;
  handle: string;
  children: ReactNode;
}

const SocialCard = ({ href, handle, children }: SocialCardProps) => {
  return (
    <Card className="social-card">
      <CardContent>
        <div className="handle">{handle}</div>
        <IconButton href={href} className="icon-button">
          {children}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
