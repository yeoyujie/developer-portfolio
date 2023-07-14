import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News of the Day: Daily Updates on Current Events",
  description:
    "Stay informed with the latest news of the day. Read our daily updates on current events from around the world. Click here to read more.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
