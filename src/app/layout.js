import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwrite = localFont({
  src: "./fonts/DancingScript-Regular.ttf",
  variable: "--font-playwrite",
  display: "swap", // optional
});

export const metadata = {
  title: "Myova",
  description: "Fashion wedding dresses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable}`}>
        {children}
      </body>
    </html>
  );
}
