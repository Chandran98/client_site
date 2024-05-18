/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState,useRef } from "react";
// import PageTrans from "../../components/page_transistion";
// import Image from "next/image";
// import CountingNumber from "@/utils/animated_counter";
import { useInView ,animate, useIsomorphicLayoutEffect} from "framer-motion";


// function Counter({ from, to }) {
//   const ref = useRef();

//   useEffect(() => {
    
// // if(ref.current){
//   console.log(`adsdf ${ref.current}`);
//     const controls = animate(from, to, {
//       duration: 1,
//       onUpdate(value) {
//         ref.current.textContent = value.toFixed(1);
//       }
//     });
//     return () => controls.stop();
//   // }
//   }, [from, to]);


//   return <p ref={ref} />;
// }
function Mycniamte({from ,to} ) {
  
const ref =useRef(null);
const inView= useInView(ref);

useIsomorphicLayoutEffect(()=>{

  const element = ref.current;
  if(!element){return};
  // if(!inView)return;
element.textContent=String(from);

  const controls= animate(from , to ,{
    duration:1.5,ease:"easeInOut",
    onUpdate(val){
      element.textContent=val.toFixed(0);
    }
  })


},[ref])

return <span ref={ref}/>
}


const about = () => {

  // useEffect(() => {
    
  // // if(ref.current){
  //   console.log(`adsdf ${ref}`);
  //     const controls = animate(0, 100, {
  //       duration: 1,
  //       onUpdate(value) {
  //         ref.current.textContent = value.toFixed(1);
  //       }
  //     });
  //     return () => controls.stop();
  //   // }
  //   }, [ref]);

  // const [count, setCount] = useState(0);
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   let intervalId;
  //   if (inView) {
  //     intervalId = setInterval(() => {
  //       if (count < 100) {
  //         setCount((prevCount) => prevCount + 1);
  //       }
  //     }, 20);
  //   }

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [inView, count]);




  return (
    // <PageTrans>
      // <div className="  text-white">
      //   <CountingNumber endValue={100} />
      // </div>
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


    <>
    <div className=" h-screen bg-cyan-200">
    {/* <Counter from={0} to={65.4} /> */}

    {/* <span ref={ref} /> */}
    </div>
    <div className=" h-screen bg-red-200"></div>
    <div className=" h-screen bg-green-200">

    </div>
    <div className=" h-screen bg-yellow-200">
      <Mycniamte from={0} to={150}/>
    </div>
    <div className=" h-screen bg-cyan-200"></div>
  
    </>
  );
};

export default about;
