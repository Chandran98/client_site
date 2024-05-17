"use client";

import React from "react";
import PageTrans from "../../components/page_transistion";
import Image from "next/image";
import CountingNumber from "@/utils/animated_counter";

const about = () => {
  return (
    // <PageTrans>
      <div className="  text-white">
        <CountingNumber endValue={100} />
      </div>
    // </PageTrans>

    // <main className='relative m-0'>
    //     <section className=' h-screen z-10 bg-cyan-300'></section>

    //     <section className=' sticky top-0 h-screen bg-fuchsia-300'>
    //         <Image src={"/bg.jpg"} className=' object-cover' fill={true   } alt='#'/>

    //       {/* <img src={"/slide01.jpg"} alt={"text"} className=" object-fill w-screen h-screen" /> */}
    //     </section>
    //     <section className='relative h-screen bg-cyan-300'></section>
    //     <section className='relative h-screen bg-yellow-300'></section>
    // </main>
  );
};

export default about;
