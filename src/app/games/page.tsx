"use client";

import { useState, useEffect } from "react";
import "./module.css";

type Country = {
  name: string;
  flag: string;
};

export default function Games() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Fetch list of countries from REST Countries API
    const fetchCountries = async () => {
      try {
        const res = await fetch("/api/v3.1/all");
        const data = await res.json();
        setCountries(
          data.map((country: any) => ({
            name: country.name.common,
            flag: country.flags.svg,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  // Set up timer
  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleRetry = () => {
    setGameOver(false);
    setTimeLeft(60);
    setScore(0);
  };

  const setRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCurrentCountry(countries[randomIndex]);
  };

  useEffect(() => {
    // Select a random country from the list
    if (countries.length > 0) {
      setRandomCountry();
    }
  }, [countries]);

  // Handle user submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      currentCountry &&
      userInput.toLowerCase() === currentCountry.name.toLowerCase()
    ) {
      setIsCorrect(true);
      setScore((score) => score + 100);
      setUserInput("");
      setRandomCountry();
    } else {
      setIsCorrect(false);
    }
  };

  // Handle skip
  const handleSkip = () => {
    setIsCorrect(false);
    setUserInput("");
    setRandomCountry();
  };

  return (
    <div className="flag-container">
      {gameOver ? (
        <>
          <div className="game-over-screen">
            <p>Game Over</p>
            <p>Your final score is: {score}</p>
            <button onClick={handleRetry}>Retry</button>
          </div>
        </>
      ) : (
        <>
          <p>Time left: {timeLeft}</p>
          <p>Score: {score}</p>
          {currentCountry && (
            <>
              <img
                src={currentCountry.flag}
                alt={`Flag of ${currentCountry.name}`}
              />
              <form onSubmit={handleSubmit}>
                <div className="webflow-style-input">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                    className={isCorrect ? "correct" : "incorrect"}
                  />
                  <button type="submit" disabled={gameOver}>
                    Submit
                  </button>
                </div>
              </form>
              <button onClick={handleSkip} disabled={gameOver}>
                Skip
              </button>
              {isCorrect && <p>Correct!</p>}
            </>
          )}
        </>
      )}
    </div>
  );
}
