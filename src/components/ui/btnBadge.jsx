"use client";
import { ChevronRight } from "lucide-react";
import { Outfit } from "next/font/google";
import React, { useEffect, useRef } from "react";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick the weights you need
  variable: "--font-outfit",
});
const BtnBadge = ({ className }) => {
  const topRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);
  const leftRef = useRef(null);
  useEffect(() => {
    const animateBorder = () => {
      const now = Date.now() / 1000;
      const speed = 0.5; // Animation speed
      // Calculate positions based on time
      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;
      // Apply positions to elements
      if (topRef.current)
        topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current)
        rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current)
        bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current)
        leftRef.current.style.transform = `translateY(${leftY}%)`;
      requestAnimationFrame(animateBorder);
    };
    const animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, []);
  return (
    <div
      className={`${className} relative w-50 max-w-2xl bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl px-1.5 py-1 leading-relaxed text-white overflow-hidden shadow-2xl ml-9 `}
    >
      <h1 className={`${outfit.variable} flex gap-1 items-center`}>
        <span className=" rounded-full bg-blue-700 px-2.5 text-xs leading-relaxed text-white font-outfit ">
          New
        </span>
        <span className="text-xs font-semibold font-outfit px-1 py-0.5">
          Next Venture is live!
        </span>
        <ChevronRight className="w-4 h-4" />
      </h1>

      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={topRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
        ></div>
      </div>

      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div
          ref={rightRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={bottomRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div
          ref={leftRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
        ></div>
      </div>
    </div>
  );
};

export default BtnBadge;
