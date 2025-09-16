import React from "react";
import { ArrowRight } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: " --font-outfit: var(--font-outfit), sans-serif;",
});

export default function ContactBtn({
  text = "Get Started",
  primaryColor = "#dcdcdc",
  className = "",
  ...props
}) {
  return (
    <button
      className={`contact-btn group relative rounded-full border  border-white/10 bg-white/10 p-1.5 text-lg font-semibold  ${className} ${outfit.variable}`}
      {...props}
    >
      <div
        className="contact-btn-bg absolute left-0 top-0 flex h-10 w-10 items-center justify-end rounded-full transition-all duration-200 ease-in-out"
        style={{ backgroundColor: primaryColor }}
      >
        <span className="mr-3 text-white transition-all duration-200 ease-in-out">
          <ArrowRight className="text-black" size={20} />
        </span>
      </div>
      <span className="contact-btn-text relative left-4 z-10 whitespace-nowrap px-8  text-white/95 transition-all duration-200 ease-in-out font-outfit">
        {text}
      </span>
    </button>
  );
}
