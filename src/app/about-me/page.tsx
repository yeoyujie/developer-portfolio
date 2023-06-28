"use client";

import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import city from "@/assets/city.png";
import Image from "next/image";
import "./module.css";

// Add custom type definition for setTween method
declare module "scrollmagic" {
  interface Scene {
    setTween(target: any, vars: gsap.TweenVars): this;
  }
}

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default function About() {
  useEffect(() => {
    // Init ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // Create scenes for each black div
    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#trigger-1",
      duration: "20%",
    })
      .setTween("#wallpaper", { y: "-80%" })
      .setTween("#black-div-1", { y: "-30%" })
      .addTo(controller);
    

    var scene2 = new ScrollMagic.Scene({
      triggerElement: "#black-div-2",
      duration: "100%",
    })
      .setTween("#wallpaper", { y: "-160%" })
      .setTween("#black-div-2", { y: "-160%" })
      .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
      triggerElement: "#black-div-3",
      duration: "100%",
    })
      .setTween("#wallpaper", { y: "-240%" })
      .setTween("#black-div-3", { y: "-240%" })
      .addTo(controller);
  }, []);

  return (
    <div className="cc">
      <Image src={city} alt="City" id="wallpaper" />
      <div id="black-div-1" className="black-div">
        Black Div 1
      </div>
      <div id="black-div-2" className="black-div">
        Black Div 2
      </div>
      <div id="black-div-3" className="black-div">
        Black Div 3
      </div>
    </div>
  );
}
