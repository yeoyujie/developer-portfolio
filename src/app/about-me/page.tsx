"use client";

// import { useEffect, useState, useRef } from "react";
import { Parallax, Background } from "react-parallax";
import Image, { StaticImageData } from "next/image";
import "./module.css";
import cityImg from "@/assets/city.png";
import city2Img from "@/assets/city2.png";
import Head from "next/head";

const styles: React.CSSProperties = {
  fontFamily: "Montserrat, sans-serif",
  textAlign: "center",
};

const image1 = "https://picsum.photos/1920/1080";

const insideStyles: React.CSSProperties = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export default function About() {
  return (
    <div style={styles}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
    </div>
  );
}
