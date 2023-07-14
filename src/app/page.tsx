"use client";

import WelcomeSection from "@/components/WelcomeSection";
import Link from "next/link";
import styles from "./page.module.css";
import SparkleButton from "@/components/SparkleButton";

export default function Home() {
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
            <SparkleButton text={"Enter if you dare!"}/>
          </Link>
        </section>
      </main>
    </>
  );
}
