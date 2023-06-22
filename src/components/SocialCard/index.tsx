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
        <IconButton href={href}>{children}</IconButton>
        <div className="handle">{handle}</div>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
