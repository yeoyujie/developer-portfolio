import React, { useRef, useEffect } from "react";

interface ParallaxProps {
  imageSrc: string;
  height: string;
  children: React.ReactNode;
}

const Parallax = ({ imageSrc, height, children }: ParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      const onScroll = () => {
        if (parallaxRef.current) {
          const scrollPosition = window.pageYOffset;
          parallaxRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <div
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
