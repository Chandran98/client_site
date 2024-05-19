import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PageTrans = ({ children }) => {
  return (
    <>
      {children}
      {/* <motion.div
        animate={{ scaleY: 0 }}
        initial={{ scaleY: 1 }}
        transition={{ duration: 0.5,delay:0.5, ease: [0.22, 1, 0.36, 1] }}
        exit={{ scaleY: 0}}
        className=" fixed top-0 w-screen h-screen bg-red-700 origin-bottom"
      ></motion.div> */}

      <motion.div
        animate={{ y: "100%" }}
        initial={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
        exit={{ y: "100%" }}
        className=" fixed top-0 w-screen h-screen bg-red-500 origin-bottom"
      ></motion.div>
      <motion.div
        animate={{ x: "-100%" }}
        initial={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: 0 }}
        className="  w-screen h-screen top-0 flex  items-center justify-center text-white bg-[#343a40] origin-top  absolute"
      >
        <Image src={"/loading.gif"} width={100} height={100} alt="#" />
        Please wait 
      </motion.div>
    </>
  );
};

export default PageTrans;
