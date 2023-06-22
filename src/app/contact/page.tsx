"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./module.css";
import SocialCard from "@/components/SocialCard";
import LinkedInPng from "@/assets/linkedin.png";
import InstagramPng from "@/assets/instagram.png";
import TelegramPng from "@/assets/telegram.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // example messages from the database
  const messages = [
    { name: "Alice", email: "alice@example.com", message: "Hello!" },
    { name: "Bob", email: "bob@example.com", message: "Great website!" },
    {
      name: "Charlie",
      email: "charlie@example.com",
      message: "Keep up the good work!",
    },
    { name: "Delta", email: "delta@example.com", message: "Hello!" },
    { name: "Echo", email: "echo@example.com", message: "Great website!" },
    {
      name: "Foxtrot",
      email: "foxtrot@example.com",
      message: "Keep up the good work!",
    },
  ];

  const settings = {
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
          gutterBottom
        >
          My Socials
        </Typography>
        <SocialCard
          href="https://www.instagram.com/yu_jieee"
          handle="@yu_jieee"
          pngSrc={InstagramPng}
        >
          <InstagramIcon />
        </SocialCard>
        <SocialCard
          href="https://www.linkedin.com/in/yeoyujie/"
          handle="Yeo Yu Jie"
          pngSrc={LinkedInPng}
        >
          <LinkedInIcon />
        </SocialCard>
        <SocialCard
          href="https://t.me/yu_jieee"
          handle="@yu_jieee"
          pngSrc={TelegramPng}
        >
          <TelegramIcon />
        </SocialCard>
      </>
      <Card>
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
            gutterBottom
          >
            Share your thoughts with us!
            <br />
            Toggle the button on the right if you want to post to the message
            board below and connect with others!
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
            <br />
            <br />
            <TextField
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
            <br />
            <br />
            <TextField
              label="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              fullWidth
              multiline
            />
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <Slider {...settings} className="slider">
        {messages.map((msg) => (
          <Card key={msg.email} className="square-card">
            <CardContent>
              <h3>{msg.name}</h3>
              <p>{msg.email}</p>
              <p>{msg.message}</p>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </>
  );
}
