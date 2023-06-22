"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Carousel from "react-material-ui-carousel";

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
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <IconButton href="https://www.instagram.com/yu_jieee">
        <InstagramIcon />
      </IconButton>
      @yu_jieee
      <br />
      <IconButton href="https://www.linkedin.com/in/yeoyujie/">
        <LinkedInIcon />
      </IconButton>
      Yeo Yu Jie
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
            <TextField
              label="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              fullWidth
              multiline
            />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
      <Carousel>
        {messages.map((msg) => (
          <Card key={msg.email}>
            <CardContent>
              <h3>{msg.name}</h3>
              <p>{msg.email}</p>
              <p>{msg.message}</p>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </>
  );
}
