import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games | Yu Jie's Dev Portfolio",
  description:
    "Play games so we can earn points and defeat the evil monsters plaguing the world.",
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
