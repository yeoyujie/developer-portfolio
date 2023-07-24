"use client";

import { useEffect, useRef } from "react";
import "./component.css";

interface FlexHoverSliderProps {
  items: any[];
}

const FlexHoverSlider: React.FC<FlexHoverSliderProps> = ({ items }) => {
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
        {items.map((item) => (
          <div
            className="flex-slide"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.backgroundImg.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex-title">{item.name}</div>
            <div className="flex-about">
              <ul className="hackathon-description">
                {item.description.map((point: any) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FlexHoverSlider;
