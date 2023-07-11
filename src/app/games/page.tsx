"use client";

import { useState, useEffect } from "react";

type Country = {
  name: string;
  flag: string;
};

export default function Games() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

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

  useEffect(() => {
    // Select a random country from the list
    if (countries.length > 0) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      setCurrentCountry(countries[randomIndex]);
    }
  }, [countries]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      currentCountry &&
      userInput.toLowerCase() === currentCountry.name.toLowerCase()
    ) {
      setIsCorrect(true);
      // Generate a new random country
      const randomIndex = Math.floor(Math.random() * countries.length);
      setCurrentCountry(countries[randomIndex]);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      {currentCountry && (
        <>
          <img
            src={currentCountry.flag}
            alt={`Flag of ${currentCountry.name}`}
          />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          {isCorrect && <p>Correct!</p>}
        </>
      )}
    </div>
  );
}
