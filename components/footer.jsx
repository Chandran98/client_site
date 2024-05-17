import React from "react";

const Footer = () => {
  return (
    <div className=" relative  bg-[#313434] w-full  text-white">
      <div className=" flex justify-center items-center pb-10   ">
        <main className=" flex ">
          <div className="items-start flex-1  py-20 text-left px-10">
            <div className=" font-semibold pb-4 text-sm text-gray-500">ADDRESS</div>

            <div className="">
              Boryissa Hymri Str. No : 126 Poxniaky Greenline Kiev - Ukraine
            </div>
          </div>
          <div className="items-center justify-center flex-1 text-center  py-20 px-8">
            <div className=" font-semibold pb-4 text-sm  text-gray-500">GET IN TOUCH</div>
            <div className="">+380 98 294 80 86</div>
            <span>hello [at] verno.com.ua</span>
          </div>
          <div className="items-center  flex-1  text-right py-20 px-8">
            <div className=" font-semibold pb-4 text-sm text-gray-500">CAREER</div>

            <div>To see currently open positions career [at] verno.com.ua</div>
          </div>
        </main>
      </div>

      <div className=" justify-between flex px-24 py-10 text-sm  border-t  border-gray-700 ">
        <div>All rights reserved 2019 © Verno</div>
        <div className="">
          <span className=" px-3 text-md font-semibold"> FaceBook </span>
          <span className=" px-3 text-md font-semibold"> Twitter </span>
          <span className=" px-3 text-md font-semibold"> LinkedIn </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
