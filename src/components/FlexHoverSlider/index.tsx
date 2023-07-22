"use client";

import { useEffect, useRef } from "react";
import cddcImg from "@/assets/hackathons/cddc.png";
import brainHackImg from "@/assets/hackathons/brainhack.jpg";
import greyHatsCtfImg from "@/assets/hackathons/greyhatsctf.jpeg";

import "./component.css";

const FlexHoverSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const slides = containerRef.current.querySelectorAll(".flex-slide");

    slides.forEach((slide) => {
      slide.addEventListener("mouseenter", () => {
        const title = slide.querySelector(".flex-title") as HTMLElement;
        const about = slide.querySelector(".flex-about") as HTMLElement;

        console.log(title);

        if (title) {
          title.style.transform = "rotate(0deg)";
          title.style.top = "10%";
        }

        if (about) {
          about.style.opacity = "1";
        }
      });

      slide.addEventListener("mouseleave", () => {
        const title = slide.querySelector(".flex-title") as HTMLElement;
        const about = slide.querySelector(".flex-about") as HTMLElement;

        if (title) {
          title.style.transform = "rotate(90deg)";
          title.style.top = "15%";
        }

        if (about) {
          about.style.opacity = "0";
        }
      });
    });
  }, []);

  return (
    <>
      <div className="flex-container" ref={containerRef}>
        <div
          className="flex-slide background-image"
          style={{
            background: `url(${cddcImg.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex-title ">Home</div>
          <div className="flex-about">
            <p>Click here to navigate to the home section of the website</p>
          </div>
        </div>
        <div
          className="flex-slide "
          style={{
            background: `url(${greyHatsCtfImg.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex-title">About</div>
          <div className="flex-about">
            <p>Click here to navigate to the About section of the website</p>
          </div>
        </div>
        <div
          className="flex-slide "
          style={{
            background: `url(${cddcImg.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex-title">Work</div>
          <div className="flex-about">
            <p>Listing relevant snippets of work</p>
          </div>
        </div>
        <div
          className="flex-slide "
          style={{
            background: `url(${cddcImg.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex-title">Contact</div>
          <div className="flex-about">
            <p>Listing relevant snippets of work</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexHoverSlider;
