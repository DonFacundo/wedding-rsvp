import type { Metadata } from "next";
import { Playfair, Poiret_One } from "next/font/google";
import "./globals.css";

const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });
const poiretone = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiretone",
});

export const metadata: Metadata = {
  title: "Gerald & Claire RSVP",
  description: "GAME KNB?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="weddingtheme">
      <body className={`${playfair.variable} ${poiretone.variable}`}>
        {children}
      </body>
    </html>
  );
}
