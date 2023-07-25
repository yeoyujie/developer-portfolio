import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Yu Jie's Dev Portfolio",
  description: "My experience in hackathons, courses, and work.",
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
