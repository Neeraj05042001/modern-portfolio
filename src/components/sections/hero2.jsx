import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import InteractiveTooltip from "../mvpblocks/interactive-tooltip";
import BtnBadge from "../ui/btnBadge";

import ContactMeTrailingBtn from "../ui/ContactMeTrailingBtn";
import CopyButton from "../../../components/nurui/copy-button";
// import CopyButton from "../../../components/nurui/copy-button";
// import CopyButton from "../ui/CopyBtn";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pick the weights you need
  variable: "--font-instrument-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"], // serif with italic support
  variable: "--font-instrument-serif",
});

const Hero2 = () => {
  return (
    <div className="text-white mt-12  md:mx-3 lg:mx-5 bg-[#121212]">
      <div className="mt-30 relative">
        {/* Badge */}

        <div className="flex justify-center">
          <BtnBadge className="" />
        </div>

        {/* Hero Text */}
        <div
          className={`${instrumentSans.variable} ${instrumentSerif.variable} mx-auto  max-w-2xl `}
        >
          <h2 className=" font-instrument-serif my-2 w-full text-center text-3xl leading-snug! text-balance text-white  opacity-90 md:text-5xl lg:text-6xl">
            <span className="md:text-nowrap">I help founders turn ideas</span>
            <br className="hidden md:block" /> into seamless
            <span className="ont-instrument-serif bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text tracking-tight text-transparent italic dark:from-zinc-700 dark:via-zinc-200 ">
              {" "}
              digital experiences
            </span>
          </h2>

          <h1 className="grad-white  px-12    font-instrument-serif relative z-20 mt-6 mb-7 flex flex-col gap-0.5 w-full items-center justify-center text-center text-xl tracking-wider sm:flex-row md:text-xl lg:mt-7 lg:text-2xl">
            <span className="self-start ">Hello, I am Neeraj Kumar </span>
            <span className="self-center">
              <InteractiveTooltip className="mx-4 my-1" />
            </span>
            <span className="leading-relaxed self-end">
              {" "}
              a Frontend Developer
            </span>
          </h1>
        </div>
{/* Hero buttons */}
        <div className="mt-8   flex flex-col md:flex-row md:justify-center items-center gap-10 md:mt-15 relative">
          {/* Contact Me Button */}

          <div className="">
            <ContactMeTrailingBtn />
          </div>

          {/* Copy Button */}
          <div className=" absolute md:relative  flex  items-center justify-center  z-50 mt-15 md:mt-0 md:gap-6 ">
            <CopyButton
              text="nk05661@gmail.com"
              defaultLabel="nk05661@gmail.com"
              successLabel="Copied to clipboard"
            />
          </div>
        </div>
      </div>

      {/* gradient */}

      <div className="relative -mt-15 md:-mt-28  h-96 mx-auto overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
};

export default Hero2;
