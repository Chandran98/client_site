import React from "react";
import { motion } from "framer-motion";

const PageTrans = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        animate={{ scaleY: 0 }}
        initial={{ scaleY: 1 }}
        transition={{ duration: 0.5,delay:0.5, ease: [0.22, 1, 0.36, 1] }}
        exit={{ scaleY: 0}}
        className=" fixed top-0 w-screen h-screen bg-red-700 origin-bottom"
      ></motion.div>
      <motion.div
        animate={{ scaleX: 0 }}
        initial={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        exit={{ scaleX: 1}}
        className=" fixed top-0 w-screen h-screen bg-green-500 origin-bottom"
      ></motion.div>
     
    </>
  );
};

export default PageTrans;
