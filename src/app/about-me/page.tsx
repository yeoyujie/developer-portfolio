"use client";

import { Parallax } from "react-parallax";
import { useEffect } from "react";
import gsap from "gsap";

import cityImg from "@/assets/city.jpeg";
import sceneryImg from "@/assets/scenery.jpg";
import fantasyCityImg from "@/assets/fantasy-city.jpg";
import Head from "next/head";
import "./module.css";

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
  useEffect(() => {
    const handleScroll = () => {
      // Determine the percentage of the page that has been scrolled
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.clientHeight;
      const bodyHeight = document.body.scrollHeight - windowHeight;
      const scrollPercentage = scrollY / bodyHeight;

      // Update the background color based on the scroll position
      if (scrollPercentage < 0.25) {
        gsap.to(document.body, {
          backgroundImage: "linear-gradient(to bottom, #2f242c, #ac5234)",
          duration: 0.8,
        });
      } else if (scrollPercentage < 0.75) {
        gsap.to(document.body, {
          backgroundImage: "linear-gradient(to right, #bbd2e9, #4b3e39)",
          duration: 0.8,
        });
      } else {
        gsap.to(document.body, {
          backgroundImage: "linear-gradient(to right, #a0381a, #2f283f)",
          duration: 0.8,
        });
      }
    };

    // Call handleScroll once to set the initial background gradient
    handleScroll();

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener and reset the background gradient on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href={cityImg.src} />
      </Head>
      <div style={styles}>
        <Parallax bgImage={cityImg.src} strength={200}>
          <div style={{ height: 1000 }}>
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
        <Parallax bgImage={fantasyCityImg.src} strength={250}>
          <div style={{ height: 1000 }}>
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
        <Parallax bgImage={sceneryImg.src} strength={200}>
          <div style={{ height: 1000 }}>
            <div style={insideStyles}>Are you ready for the challenge?</div>
          </div>
        </Parallax>
        <div style={{ padding: 50 }}></div>
      </div>
    </>
  );
}
