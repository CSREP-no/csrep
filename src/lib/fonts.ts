import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const nakadaiItalic = localFont({
  src: "../fonts/Nakadai_Italic.otf",
});
export const nakadai = localFont({
  src: "../fonts/Nakadai.otf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
