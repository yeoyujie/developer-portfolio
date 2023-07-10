"use client";

import { Parallax } from "react-parallax";
import "./module.css";
import cityImg from "@/assets/city.png";
import city2Img from "@/assets/city2.png";
import Head from "next/head";

const styles: React.CSSProperties = {
  fontFamily: "Montserrat, sans-serif",
  color: "white",
};

const insideStyles: React.CSSProperties = {
  color: "white",
  opacity: 0.9,
  padding: 20,
  fontSize: 60,
  fontWeight: "bold",
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export default function About() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={cityImg.src} />
        <link rel="preload" as="image" href={city2Img.src} />
      </Head>
      <div style={styles}>
        <Parallax bgImage={cityImg.src} strength={500}>
          <div style={{ height: 800 }}>
            <div style={insideStyles}>Greetings, traveller.</div>
          </div>
        </Parallax>
        <div className="paragraph">
          <h1>Welcome to my portfolio and fantasy world!</h1> Hi, I’m Yu Jie, a
          Computer Science student at the National University of Singapore. I’m
          in my third year of learning and exploring, and I’m glad you’re here
          to share this experience with me. This website is not only my personal
          portfolio, but also a fantasy world game where you can have fun and
          challenge yourself. Scroll down to find out more!
        </div>
        <Parallax bgImage={city2Img.src} strength={500}>
          <div style={{ height: 800 }}>
            <div style={insideStyles}>Windora, a world of wonder and peril</div>
          </div>
        </Parallax>
        <div className="paragraph">
          <h1>
            Meet the programming language monsters and their mythical
            counterparts.
          </h1>
          These creatures are <strong>Pythogore</strong>,{" "}
          <strong>Javacript</strong>, <strong>Rubycon</strong>,{" "}
          <strong>Csharp</strong>, <strong>Swifton</strong>, and{" "}
          <strong>Rustle</strong>. They are cunning and fierce, but you don’t
          have to face them alone. I’m here to help you and guide you through
          this adventure. You can talk to me about anything, from school work to
          personal projects to internships. I’m friendly and supportive, but the
          monsters are not!! So let’s team up and explore this world. Are you
          ready? Then let’s go!
        </div>
        <Parallax bgImage={city2Img.src} strength={500}>
          <div style={{ height: 800 }}>
            <div style={insideStyles}>Are you ready for the challenge?</div>
          </div>
        </Parallax>
      </div>
    </>
  );
}
