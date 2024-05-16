/* eslint-disable @next/next/no-img-element */
"use client";

// import Image from 'next/image';
// // import Image from "next/image";
// import { motion, useScroll } from "framer-motion";
// import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
// import "react-awesome-slider/dist/styles.css";
// // import withCaption from 'react-awesome-slider/dist/captioned';
// // SliderComponent.js

// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const SliderComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="h-screen bg-fixed">
//       <h2 className="text-2xl mb-6">Text Above Slider</h2>
//       <Slider {...settings}>
//         <div>
//           <Image src="/slide01.jpg" width={500} height={100} alt="Slide 1" />
//         </div>
//         <div>
//           <Image src="/slide02.jpg" width={500} height={100} alt="Slide 2" />
//         </div>
//         <div>
//           <Image src="/slide03.jpg" width={100} height={100} alt="Slide 3" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default SliderComponent;

// import 'react-awesome-slider/dist/captioned.css';

// const AutoplaySlider = withAutoplay(AwesomeSlider);
// const slider = (
//   <AutoplaySlider  
//     play={true}
//     cancelOnInteraction={false} // should stop playing on user interaction
//     interval={2000}
//     bullets={false}
//     organicArrows={false}
//     fillParent={true}
//   >
//     <div data-src="/slide01.jpg" />
//     <div data-src="/slide02.jpg" />
//     <div data-src="/slide03.jpg" />
//   </AutoplaySlider>
// );export default function sliders() {
//   // const { scrollYProgress } = useScroll();

//   return <div className=" flex  ">{slider}
  
//   <p class="text-2xl z-10 font-bold">This should be on top of the map</p></div>;
// }

// import { withAutoplay } from 'react-awesome-slider/dist/autoplay';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

// const AutoplaySlider = withAutoplay(AwesomeSlider);

// export default function Sliders() {
//   return (
//     <div className="">
//       {/* Slider component */}
//       <AutoplaySlider
//         play={true}
//         cancelOnInteraction={false}
//         interval={2000}
//         bullets={false}
//         organicArrows={false}
//         fillParent={true}
//       >
//         <div data-src="/slide01.jpg">
//           <div className=' absolute flex flex-col   left-72 '>

            
//           <p className=" top-1/4   left-72  text-white text-2xl font-bold">
//             Text for Slide 1
//           </p>
//           <div className=' bg-red-400 h-9  w-36 p-4 rounded-3xl flex justify-center items-center'> Get started </div>
//           </div>
//         </div>
//         <div data-src="/slide02.jpg">
//           <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
//             Text for Slide 2
//           </p>
//         </div>
//         <div data-src="/slide03.jpg">
//           <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
//             Text for Slide 3
//           </p>
//         </div>
//       </AutoplaySlider>
//     </div>
//   );
// }



// components/Slider.js


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Slide = ({ image, text }) => (
  <div className="h-screen">
    <img src={image} alt="" className="object-cover w-full h-full" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">{text}</h1>
    </div>
  </div>
);

const SliderComponent = () => {
  return (        <div className="fixed inset-0 z-50 overflow-hidden">


    <Slider {...settings}>
      <Slide image="/slide01.jpg" text="Slide 1 Text" />
      <Slide image="/slide02.jpg" text="Slide 2 Text" />
      <Slide image="/slide03.jpg" text="Slide 3 Text" />
    </Slider>
    </div>
  );
};

export default SliderComponent;
