import React from 'react'
import {  motion} from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';
const Menu = () => {
  return (
    <>
     <motion.div
        // animate={{ scaleX: 0 }}
        // initial={{ scaleX: [1,0] }}
        // transition={{ duration: 1 }}
        // exit={{ scaleX: 0 }}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%", transition: { duration: 0.5, delay: 0.5 } }}
        transition={{ duration: 0.5 }}
        className=" fixed top-0 left-0 w-full h-screen bg-green-500 origin-top"
      >

<div className=" absolute top-0 p-6 flex w-full items-center justify-between">
        <Image
          src="https://themezinho.net/verno/images/logo.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <div className=" flex gap-3  items-center justify-center">
          <div className=" text-white text-xl"> CLOSE</div>
          <Link href="/menu">
            <MdOutlineMenu className=" text-white text-2xl" />
          </Link>
        </div>
      </div>


      </motion.div>
    </>
  )
}

export default Menu