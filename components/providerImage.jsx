import Image from "next/image";
import React from "react";

const ProviderImage = () => {
  return (
    <section className=" sticky top-0 h-screen bg-fuchsia-300">
      <div className=" ">
        <Image
          src={"/bg.jpg"}
          className=" h-screen object-cover"
          fill={true}
          alt="#"
        />
        <div className="relative top-60 w-1/3 tracking-wide left-14 flex flex-col ">
          <span className=" [word-spacing:10px] text-2xl  ">
            We create digital experiences for brands communicating the unique
            services provided to your customers. Creativity for us something
            personal.
          </span>
          <span className=" font-semibold text-2xl mt-8">verno.digital</span>
        </div>
      </div>
    </section>
  );
};

export default ProviderImage;
