import ContactBtn from "@/components/ui/ContactBtn";
import React from "react";
import { BorderTrail } from "./border-trail";

const ContactMeTrailingBtn = () => {
  return (
    <div className="">
      <div className=" relative flex h-[44px] w-[190px] flex-col items-center justify-center rounded-full bg-pri px-5 py-2 dark:bg-zinc-800">
        <BorderTrail
          className="bg-linear-to-l from-green-300/10 via-green-600 to-green-300/10 transition-opacity duration-300 

            "
          style={{
            boxShadow: `
    0 0 40px 20px rgba(209, 213, 219, 0.6),  /* gray-300 glow */
    0 0 80px 40px rgba(107, 114, 128, 0.5),  /* gray-500 depth */
    0 0 120px 60px rgba(0, 0, 0, 0.4)        /* subtle dark fade */
  `,
          }}
          size={40}
        />

        <ContactBtn text="Let's Connect" />
      </div>
    </div>
  );
};

export default ContactMeTrailingBtn;
