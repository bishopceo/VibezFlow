import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibezFlow - Music, Entertainment & News",
  description: "Your #1 source for the latest in African music, entertainment, tech, and lifestyle news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}