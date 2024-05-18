"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Menu = () => {
  const [showData, setShowData] = useState(false);
  return (
    <>
      <motion.div
        // animate={{ scaleX: 0 }}
        // initial={{ scaleX: [1,0] }}
        // transition={{ duration: 1 }}
        // exit={{ scaleX: 0 }}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%", transition: { duration: 0.5, delay: 0.5 } }}
        transition={{ duration: 0.5 }}
        className=" fixed top-0 left-0  w-full h-screen bg-green-500 origin-top"
      >
        <div className=" absolute top-0 p-6 flex w-full items-center justify-between">
          <Image
            src="https://themezinho.net/verno/images/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <div className=" flex gap-3  items-center justify-center">
            <div className=" text-white text-xl"> CLOSE</div>
            <Link href="/">
              <IoMdClose className=" text-white text-2xl" />
            </Link>
          </div>
        </div>

        <div className=" relative mt-40   text-white px-24 flex">
          <div className=" w-1/2 p-10 bg-red-400   items-center justify-center">
            <div className=" text-[2rem] font-bold">ADDRESS</div>
            <div className=" w-1/2  text-2xl font-base">
              Boryissa Hymri Str. No : 126 Poxniaky Greenline Kiev - Ukraine
            </div>
          </div>

          <div className=" w-1/2 flex-1  font-extrabold text-[4rem] ">
            <div
              className=""
              onMouseEnter={() => setShowData(true)}
              onMouseLeave={() => setShowData(false)}
            >
              HOME
              {showData && (
                <div className=" text-lg flex flex-col">
                  <span>sadfasdfas</span>
                  <span>sadfasdfas</span>
                </div>
              )}
            </div>
            <div className="">VERNO</div>
            <div className="">WORKS</div>
            <div className="">BLOG</div>
            <div className="">CONTACT</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
