// "use client";
// import { Copy } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import Lottie from "lottie-react";
// import animationData from "../../../confetti on transparent background.json"
// const CopyButton = ({
//   text,
//   defaultLabel = "Copy my email address",
//   successLabel = "Email is Copied!",
// }) => {
//     const [isClient, setIsClinet] =useState(false)
//   const [copied, setCopied] = useState(false);

//   useEffect(()=>{
//     setIsClinet

//     (true)
//   }, [])
//   const handleCopy = () => {
//     console.log("handleCopy")
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000); // reset after 2s
//   };
//   return {isClient?} (
//     <button
//       onClick={handleCopy}
//       className="relative mt-5 bg-fuchsia-950 px-4 py-2 rounded-lg font-bold flex gap-2 items-center text-white transition-colors"
//       style={{ minWidth: "220px" }} // ✅ lock button width (tweak px if needed)
//     >
//       <Copy className="w-5 h-5" />

//       {/* keep label width stable by wrapping */}
//       <span className="whitespace-nowrap text-center flex-1">
//         {copied ? successLabel : defaultLabel}
//       </span>

//       {copied && (
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <Lottie
//             animationData={animationData}
//             loop={false}
//             autoplay={true}
//             style={{ width: 200, height: 200 }}
//           />
//         </div>
//       )}
//     </button>
//   );
// };
// export default CopyButton;
