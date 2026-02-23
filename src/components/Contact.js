/* eslint-disable react/no-unknown-property */
import React from "react";
import { motion } from "framer-motion";
import Lanyard from "./Lanyard";

const pageVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.99, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, scale: 0.99, filter: "blur(8px)" },
};

const pageTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

const ContactUs = () => {
  return (
    <motion.div
      className="min-h-screen w-full"
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={pageTransition}
    >
      {/* Your 3D lanyard */}
      <div className="w-full h-screen">
        <Lanyard transparent={true} />
      </div>

      {/* Optional content below the 3D */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg opacity-80">
          Have a question? Drop us a message and we’ll get back to you.
        </p>

        <form className="mt-8 grid gap-4">
          <input className="border p-3 rounded-lg" placeholder="Your name" />
          <input className="border p-3 rounded-lg" placeholder="Email" />
          <textarea className="border p-3 rounded-lg min-h-[140px]" placeholder="Message" />
          <button className="bg-black text-white px-5 py-3 rounded-lg w-fit">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;