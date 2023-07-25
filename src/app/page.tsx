"use client";

import { useLayoutEffect } from "react";
import WelcomeSection from "@/components/WelcomeSection";
import Link from "next/link";
import styles from "./page.module.css";
import SparkleButton from "@/components/SparkleButton";
export default function Home() {
  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(#2b1055, #7597de)";

    // Reset the background color on cleanup
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <>
      <WelcomeSection />
      <main>
        <section className={styles.intro}>
          <h1>Greetings, traveler!</h1>
          <p>
            You have stumbled upon a portal to another realm, where you can
            discover the secrets of my magical craft.
          </p>
          <Link href="/about-me">
            <SparkleButton text={"Enter if you dare!"} />
          </Link>
        </section>
      </main>
    </>
  );
}
