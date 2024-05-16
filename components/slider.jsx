/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useScroll } from "framer-motion";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// const settings = {
//   dots: false,
//   infinite: true,

//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   beforeChange: (current, next) => setAnimatingIndex(next),
//   afterChange: (current) => setAnimatingIndex(null),
// };

const slideData = [
  {
    // image: "https://kairaaexchange.s3.amazonaws.com/image/1692682839637.jpg",
    image: "/slide01.jpg",
    text: "BECOME DELUXE ",
    subtext: "Normal distribution of letters, as opposed",
  },
  {
    // image: "https://kairaaexchange.s3.amazonaws.com/image/1705225155005.jpg",
    image: "/slide02.jpg",
    text: "BECOME DELUXE ",
    subtext: "-Normal distribution of letters, as opposed",
  },
  {
    // image: "https://kairaaexchange.s3.amazonaws.com/image/1700655698732.jpg",
    image: "/slide03.jpg",
    text: "BECOME DELUXE",
    subtext: "-Normal distribution of letters, as opposed",
  },
];

const textVariants = {
  hidden: { x: 0 },
  visible: { x: 80 },
};

const SliderComponent = () => {
  const [animated, setAnimate] = useState(null);
  return (
    <div className="sticky top-0 bg-white inset-0 text-cyan-50 -z-10">
      <div className="bg-red-500 right-0 h-4 absolute z-10 w-1/4"></div>
      <Slider
        {...{
          dots: false,
          infinite: true,
          variableWidth: true,
          arrows: false,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,

          autoplay: true,
          autoplaySpeed: 3000,
          beforeChange: (current, next) => setAnimate(next),
          afterChange: (current) => setAnimate(null),
        }}
      >
        {slideData.map((slide, i) => {
          console.log(`dsfsf ${i} dfsadfsdf ${animated}`);
          return (
            <Slide
              key={i}
              animate={animated}
              indexdata={i}
              image={slide.image}
              text={slide.text}
              subtext={slide.subtext}
            />
          );
        })}
      </Slider>

      <div className=" ml-8 sticky bottom-0 flex flex-col ">
        <div className=" pb-6">
          <span className=" px-3 text-md font-semibold"> FaceBook </span>
          <span className=" px-3 text-md font-semibold"> Twitter </span>
          <span className=" px-3 text-md font-semibold"> LinkedIn </span>
        </div>
        <div className="bg-red-500 h-16 w-1/2"></div>
      </div>
    </div>
  );
};

const Slide = ({ key, animate, indexdata, image, text, subtext }) => {
  console.log(`dfadfasf${indexdata} ${image} ${text} ${key} `);
  return (
    <div className="relative h-screen">
      <img src={image} alt={text} className=" object-fill w-screen h-screen" />
      <div className="absolute pl-[10rem] top-0 text-start  w-full h-full flex flex-col items-start justify-center">
        <motion.h1
          initial="hidden"
          animate={animate === indexdata ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.2 }}
          className=" items-start text-white text-4xl mb-7"
        >
          {subtext}
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate={animate === indexdata ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.5 }}
          className=" items-start  text-white w-2/5 text-9xl font-bold"
        >
          {text}
        </motion.h2>

        <div className=" relative flex items-center justify-center mt-8 h-12 w-40 bg-red-400   rounded-full">
          <Image
            src="/btn-bg.jpg"
            className="rounded-full  "
            width={800}
            height={800}
            // style={{objectFit: "contain"}}

            // fill={true}
            alt="Picture of the author"
          />
          <span className=" absolute">Get Started</span>
        </div>
      </div>
    </div>
  );
};
// export default SliderComponent;

export default SliderComponent;
