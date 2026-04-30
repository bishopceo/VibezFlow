import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JNews Default - Premium WordPress News & Magazine Theme",
  description: "We bring you the best Premium WordPress Themes that perfect for news, magazine, personal blog, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
