import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games | Guess The Country",
  description:
    "Put your geography knowledge to the test with our Guess The Country game. Can you identify countries from their flags, landmarks, and other clues?",
};

export default function GuessTheCountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
