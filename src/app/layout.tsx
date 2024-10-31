import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Won games",
  description: "The best Game Stores in the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
