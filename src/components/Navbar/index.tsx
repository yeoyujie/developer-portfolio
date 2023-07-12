"use client";

import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/logo.png";
import LogoNeon from "@/assets/icons/logo neon.png";

const pages = [
  { title: "About", href: "/about-me" },
  { title: "News of the Day", href: "/news" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Games", href: "/games" },
  { title: "Monsters", href: "/monsters" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [logoSrc, setLogoSrc] = useState(Logo);

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
          <Link
            href="/"
            passHref
            onMouseEnter={() => setLogoSrc(LogoNeon)}
            onMouseLeave={() => setLogoSrc(Logo)}
          >
            <Image src={logoSrc} alt="Home" width={60} height={60} />
          </Link>
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
