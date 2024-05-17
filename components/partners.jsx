import Image from "next/image";
import React from "react";

const Partners = () => {
  const imgData = [
    "logo01.png",
    "logo02.png",
    "logo03.png",
    "logo04.png",
    "logo05.png",
    "logo06.png",
    "logo07.png",
    "logo08.png",
    "logo09.png",
  ];
  return (
    <section className="relative  bg-white pt-10  justify-center flex ">
      <div className=" flex flex-col items-center gap-3 mt-10">
        <span className=" text-xl">
          We offer the world’s leading brands premium digital solutions
        </span>
        <span className=" font-bold text-8xl pb-10">PARTNERS</span>
        <div className=" grid-cols-3 grid pb-14 ">
          {imgData.map((e, i) => {
            return (
              <div key={i} className=" my-10 mx-24 	">
                <Image
                  src={`/${e}`}
                  alt="#"
                  className="hover:opacity-100 ease-in-out opacity-25"
                  width={150}
                  height={150}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
