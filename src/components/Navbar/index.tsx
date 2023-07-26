"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import LogoNeon from "@/assets/icons/logo neon.png";
import LogoNeonOutline from "@/assets/icons/logo neon outline.png";

const pages = [
  { title: "About", href: "/about-me" },
  { title: "News", href: "/news" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Games", href: "/games" },
  { title: "Monsters", href: "/monsters" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [logoSrc, setLogoSrc] = useState(LogoNeonOutline);
  const gradient = "linear-gradient(to right bottom, #430089, #82ffa1)";
  const cyanGraident = "linear-gradient(to right bottom, #00c5c8, #70e7d1)";

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            href="/"
            passHref
            onMouseEnter={() => setLogoSrc(LogoNeon)}
            onMouseLeave={() => setLogoSrc(LogoNeonOutline)}
          >
            <Image src={logoSrc} alt="Home" width={70} height={70} />
          </Link>
        </Typography>
        {pages.map((page) => (
          <Link key={page.href} href={page.href} passHref>
            <Button
              color="inherit"
              sx={{
                marginLeft: "16px",
                "&:hover": {
                  background: gradient,
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
