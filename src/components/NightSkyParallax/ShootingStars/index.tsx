import React, { useState } from "react";
import Lottie from "lottie-react";
import fastShootingStar from "@/assets/fastshootingstar.json";


const ShootingStars = () => {
  const [playSecondAnimation, setPlaySecondAnimation] = useState(false);
  const [playThirdAnimation, setPlayThirdAnimation] = useState(false);
  const [playFourthAnimation, setPlayFourthAnimation] = useState(false);
  const [playFifthAnimation, setPlayFifthAnimation] = useState(false);

  setTimeout(() => {
    setPlaySecondAnimation(true);
  }, 500);

  setTimeout(() => {
    setPlayThirdAnimation(true);
  }, 2000);

  setTimeout(() => {
    setPlayFourthAnimation(true);
  }, 3500);

  setTimeout(() => {
    setPlayFifthAnimation(true);
  }, 2700);

  return (
    <>
      <Lottie
        animationData={fastShootingStar}
        loop={true}
        autoplay={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      />
      {playSecondAnimation && (
        <Lottie
          animationData={fastShootingStar}
          loop={true}
          autoplay={true}
          style={{
            position: "absolute",
            top: 0,
            left: -800,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        />
      )}
      {playThirdAnimation && (
        <Lottie
          animationData={fastShootingStar}
          loop={true}
          autoplay={true}
          style={{
            position: "absolute",
            top: 0,
            left: -1900,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        />
      )}
      {playFourthAnimation && (
        <Lottie
          animationData={fastShootingStar}
          loop={true}
          autoplay={true}
          style={{
            position: "absolute",
            top: 0,
            left: -3000,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        />
      )}
      {playFifthAnimation && (
        <Lottie
          animationData={fastShootingStar}
          loop={true}
          autoplay={true}
          style={{
            position: "absolute",
            top: 0,
            left: 900,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        />
      )}
    </>
  );
};

export default ShootingStars;
