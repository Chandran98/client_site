"use client";
import CountingNumber from "@/utils/animated_counter";
import AnimateCounter from "@/utils/animated_counter";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView,useIsomorphicLayoutEffect } from "framer-motion";


const Service = () => {
  const serviceData = [
    {
      image: "/icon01.png",
      title: "CMS Development",
      subtitle:
        "The slide out menu came to life right with as a popular option for mobile    ",
    },
    {
      image: "/icon02.png",
      title: "Mobile Applications",
      subtitle:
        "The slide out menu came to life right with as a popular option for mobile    ",
    },
    {
      image: "/icon03.png",
      title: "User Interface Designs",
      subtitle:
        "The slide out menu came to life right with as a popular option for mobile    ",
    },
    {
      image: "/icon04.png",
      title: "Software Solutions",
      subtitle:
        "The slide out menu came to life right with as a popular option for mobile    ",
    },
  ];
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView= useInView(ref,{once:true});

  useIsomorphicLayoutEffect(() => {
if (!ref.current) {
  return
}

    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [inView,ref,count]);

  return (
    <section className=" relative  text-center h-[120vh] bg-white">
      {/* <Image
        src={"/bgshape.jpg"}
        alt="# "
        // width={500} height={500}
        fill={true}
        className=" object-none"
      /> */}
      <div className=" relative   py-36    flex px-20 items-center justify-center">
        <div ref={ref} className=" flex flex-auto items-center justify-evenly">
          <div className=" "></div>
          <div className=" ">
            <div>sfdsdffds</div>
    <motion.div ref={ref}
      className="text-4xl font-bold text-center"
      animate={{ scale: [1, 1.1, 1], duration: 5 }}
    >
      {count}
    </motion.div>
          {/* </div>  <div className=" ">
            <div>sfdsdffds</div>
            <CountingNumber ref={ ref} endValue={25} />
          </div>  <div className=" ">
            <div>sfdsdffds</div>
            <CountingNumber ref={ ref} endValue={75  } /> */}
          </div>
        </div>
        <div className=" flex-1 text-right   px-20 ">
          <div className=" font-bold text-xl pb-6">
            REACH GOALS AND KEEP WORKING
          </div>
          <div className=" text-gray-500  ">
            We split between creative strategies and digital experiences,
            finding strong messages and visual essence
          </div>
        </div>
      </div>
      <div className=" bg-[#878D94]   grid grid-cols-4  ">
        {serviceData.map((e, i) => {
          return (
            <div
              key={i}
              className={`relative flex flex-col py-36  ${
                i === 3 ? "" : "border-r border-gray-400"
              } px-10 hover:bg-[#80868C]  text-white  items-center justify-center`}
            >
              <Image
                src={e.image}
                width={50}
                height={50}
                className=" "
                alt="#"
              />
              <div className=" text-xl py-8">{e.title}</div>
              <div className=" text-lg ">{e.subtitle}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
