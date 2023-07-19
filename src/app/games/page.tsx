"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScoreDisplay from "@/components/ScoreDisplay";
import GameOverScreen from "@/components/GameOverScreen";
import TipBox from "@/components/TipBox";
import CountryStatuses from "@/components/CountryStatuses";

import { CountryStatus } from "@/types";
import { Country } from "@/types";

import "./module.css";

export default function Games() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [countryStatuses, setCountryStatuses] = useState<CountryStatus[]>([]);
  const [usedCountries, setUsedCountries] = useState(new Set());

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch list of countries from REST Countries API
    const fetchCountries = async () => {
      try {
        const res = await fetch("/api/v3.1/independent?status=true");
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

  // Effect hook to focus on the input element on component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Effect hook to show tip on first visit
  useEffect(() => {
    const firstVisit = localStorage.getItem("firstVisit");
    if (!firstVisit) {
      setShowTip(true);
      localStorage.setItem("firstVisit", "false");
    }
  }, []);

  const setRandomCountry = () => {
    // Filter out countries that have already been displayed
    let availableCountries = countries.filter(
      (country) => !usedCountries.has(country.name)
    );

    // If all countries have been used, reset usedCountries and select from full list of countries
    if (availableCountries.length === 0) {
      setUsedCountries(new Set());
      availableCountries = countries;
    }

    // Select a random country from the available countries
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    const newCountry = availableCountries[randomIndex];
    setCurrentCountry(newCountry);

    // Add the new country to the set of used countries
    setUsedCountries((usedCountries) =>
      new Set(usedCountries).add(newCountry.name)
    );
  };

  useEffect(() => {
    // Select a random country from the list
    if (countries.length > 0) {
      setRandomCountry();
    }
  }, [countries]);

  const checkAnswer = () => {
    if (
      currentCountry &&
      userInput.toLowerCase() === currentCountry.name.toLowerCase()
    ) {
      setIsCorrect(true);
      setScore((score) => score + 100);
      setUserInput("");
      setCountryStatuses((statuses) => [
        ...statuses,
        {
          name: currentCountry.name,
          flag: currentCountry.flag,
          status: "correct",
        },
      ]);
      setRandomCountry();
      setCorrectGuesses((correctGuesses) => correctGuesses + 1);
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    checkAnswer();
  }, [userInput, currentCountry]);

  // Handle user submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkAnswer();
  };

  // Handle tab key press for skipping
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();
      handleSkip();
    }
  };

  const handleRetry = () => {
    setGameOver(false);
    setTimeLeft(60);
    setScore(0);
    setCorrectGuesses(0);
    setRandomCountry();
    setUsedCountries(new Set());
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  // Handle skip
  const handleSkip = () => {
    setIsCorrect(false);
    setUserInput("");
    if (currentCountry) {
      setCountryStatuses((statuses) => [
        ...statuses,
        {
          name: currentCountry.name,
          flag: currentCountry.flag,
          status: "skipped",
        },
      ]);
    }
    setRandomCountry();
  };

  return (
    <div className="flag-container">
      {showTip && (
        <TipBox message="Type the name of the country whose flag is shown. You can also press the Tab key to skip." />
      )}
      {gameOver ? (
        <>
          <GameOverScreen score={score} onRetry={handleRetry} />
          <CountryStatuses countryStatuses={countryStatuses} />
        </>
      ) : (
        <>
          <ScoreDisplay
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            score={score}
            onGameOver={handleGameOver}
          />
          {currentCountry && (
            <>
              <Image
                src={currentCountry.flag}
                alt="Nice try but try to guess the flag yourself!"
                width={700}
                height={400}
              />
              <form onSubmit={handleSubmit}>
                <div className="webflow-style-input">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                    onKeyDown={handleKeyDown}
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
              <button onClick={handleGameOver} disabled={gameOver}>
                End Game
              </button>
              {isCorrect && <p>Correct!</p>}
            </>
          )}
        </>
      )}
    </div>
  );
}
