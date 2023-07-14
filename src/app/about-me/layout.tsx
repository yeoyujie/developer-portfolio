import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Yu Jie's Dev Portfolio",
  description:
    "Explore this site and find out more about me.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
