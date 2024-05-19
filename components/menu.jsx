"use client";
import React, { useState } from "react";
import { animate, motion } from "framer-motion";
const Menu = ({ openMenu }) => {
  const [showData, setShowData] = useState(false);

  // if (!openMenu) {
  //   return <></>
  // }

  console.log(openMenu);
  return (
    <div className=" ">
      <motion.div
        initial={
          openMenu
            ? { x: "-100%", transition: { duration: 0.5, ease: "easeInOut" }  
            }
            : { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } 
          }
          // transition={{ duration: 0.5 }
        }
        animate={
          openMenu
            ? { x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
            : {
                x: "100%",
                transition: { duration: 1, ease: "easeInOut" },
              }
        }
        exit={
          openMenu
            ? {
                x: "100%",
                transition: { duration: 0.8, delay: 0.8, ease: "easeInOut" },
              }
            : {
                x: "-100%",
                transition: { duration: 0.8, delay: 0.8, ease: "easeInOut" },
              }
        }
        // transition={{ duration: 0.5 }
      // }
        className=" fixed top-0 left-0 w-full h-screen bg-[#343a40] origin-top"
      ></motion.div>

      <motion.div
        initial={
          openMenu
            ? {
                x: "-100%",
                transition: { duration: 0.8, delay: 0.8, ease: "easeInOut" },
              }
            : {
                x: "100%",
                transition: { duration: 0.8, delay: 0.8, ease: "easeInOut" },
              }
        }
        animate={
          openMenu
            ? { x: 0, transition: { duration: 1, ease: "easeInOut" } }
            : { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } }
        }
        exit={
          openMenu
            ? { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } }
            : { x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }
        }
        transition={{ duration: 0.5 }}
        className=" fixed top-0 left-0 w-full h-screen bg-red-500 origin-top"
      >
        <div className="  mt-40   text-white px-24 flex">
          <div className=" absolute top-1/2 left-1/2 w-1/2 p-10 justify-end mr-0">
            <div className=" text-[2rem] font-bold">ADDRESS</div>
            <div className=" w-1/2  text-2xl font-base">
              Boryissa Hymri Str. No : 126 Poxniaky Greenline Kiev - Ukraine
            </div>
          </div>

          <div className=" w-1/2 flex-1  font-extrabold text-[4.5rem] ">
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={
                openMenu && { y: -20, opacity: 1, transition: { delay: 0.5 } }
              }
              className=""
              onMouseEnter={() => setShowData(true)}
              onMouseLeave={() => setShowData(false)}
            >
              HOME
              {showData && (
                <div className=" text-lg flex flex-col px-2 py-1">
                  <span className=" text-[2rem] pb-2 font-bold">Slider</span>
                  <span className=" text-[2rem] pb-2 font-bold">Carousel</span>
                  <span className=" text-[2rem] pb-2 font-bold">Bg Video</span>
                </div>
              )}
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              exit={openMenu ? { y: "10%", opacity: 0 } : { y: 0, opacity: 0 }}
              animate={
                openMenu && { y: -20, opacity: 1, transition: { delay: 0.5 } }
              }
              className=""
            >
              VERNO
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              exit={openMenu ? { y: "10%", opacity: 0 } : { y: 0, opacity: 0 }}
              animate={
                openMenu && { y: -20, opacity: 1, transition: { delay: 0.5 } }
              }
              className=""
            >
              WORKS
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              exit={openMenu ? { y: "10%", opacity: 0 } : { y: 0, opacity: 0 }}
              animate={
                openMenu && { y: -20, opacity: 1, transition: { delay: 0.5 } }
              }
              className=""
            >
              BLOG
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              exit={openMenu ? { y: "10%", opacity: 0 } : { y: 0, opacity: 0 }}
              animate={
                openMenu && { y: -20, opacity: 1, transition: { delay: 0.5 } }
              }
              className=""
            >
              CONTACT
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
