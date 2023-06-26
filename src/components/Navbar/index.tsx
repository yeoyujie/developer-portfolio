"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const pages = [
  { title: "About", href: "/about-me" },
  { title: "News of the Day", href: "/news" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Games", href: "/games" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        marginBottom: "16px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">Home</Link>
        </Typography>
        {pages.map((page) => (
          <Link key={page.href} href={page.href} passHref>
            <Button
              color="inherit"
              sx={{
                marginLeft: "16px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2b1055",
                },
              }}
            >
              {page.title}
            </Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
