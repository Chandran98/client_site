/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { React } from "react";

export const ShowCase = () => {
  return (
    <div>
      <div id="about" className="h-screen bg-white">
        <div className="flex flex-col w-1/3 ml-52 items-start justify-start pt-24">
          <h1 className="text-8xl  font-bold text-center  mb-10">SHOWCASES</h1>
          <h2 className="text-xl  text-gray-400">
            We create digital experiences for brands communicating the unique
            services provided to your customers. Creativity for us something
            personal.
          </h2>
        </div>

        <div className=" bg-cyan-300 h-screen"></div>
        <img src={"/bg.jpg"} alt="#" className="  z-0 w-screen h-screen" />
        <div className=" bg-transparent h-screen">

    
          {/* <Image src={"/bg.jpg"} width={100} height={100} alt="#" /> */}
        </div>
        <div className=" bg-red-500 h-screen">

    
{/* <Image src={"/bg.jpg"} width={100} height={100} alt="#" /> */}
</div>
      </div>
    </div>
  );
};
