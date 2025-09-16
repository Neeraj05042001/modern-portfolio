import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/layout/Navbar";
import { DummyContent } from "./page";
import { Navigation } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neeraj",
  description: "Neeraj's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212]`}
      >
        {/* <div className="">
          <Navigation />
          <main>{children}</main>
        </div> */}
        <main>{children}</main> 
      </body>
    </html>
  );
}
