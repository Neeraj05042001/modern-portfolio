import {
  ArrowBigRightDashIcon,
  ArrowRight,
  ArrowRightCircle,
} from "lucide-react";
import React from "react";
import {
  MdArrowRightAlt,
  MdDone,
  MdOutlineArrowRightAlt,
} from "react-icons/md";
const HoverShadowButton = ({ text }) => {
  return (
    <button className="relative w-50 cursor-pointer  pl-6 pr-1   py-0.5  text-white font-semibold rounded-full   hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group  bg-white/5 backdrop-blur-md border border-gray-800 ">
      <span className="flex items-center space-x-2 justify-between">
        <span>{text}</span>
        <span className="border p-1 rounded-full bg-white text-black">
          <ArrowRight />
        </span>
      </span>
      
    </button>
  );
};
export default HoverShadowButton;
