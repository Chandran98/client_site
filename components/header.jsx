"use client";
import Image from "next/image";
import React, { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import Menu from "./menu";
import ThemeSwitcher from "@/utils/themeSwitch";
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/navigation'

const Header = () => {
  const [openMenu, setMenu] = useState(null);
const router=useRouter();
  console.log(`asdfadf${openMenu}`)

  return (
    <div className="">
      {  <Menu  openMenu={openMenu}/>}
      <div className=" absolute  top-0 p-6 flex w-full items-center justify-between">
{      openMenu ? <div></div>: <Image onClick={()=>router.push("/")}
          src="https://themezinho.net/verno/images/logo.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />}
        <div className=" flex gap-3  items-center justify-center">
          {/* <ThemeSwitcher /> */}
          <div className=" text-white text-xl">
            
            {openMenu ? "CLOSE" : "MENU"}
          </div>
          {/* <Link href="/menu"> */}
          {openMenu ? (
            <IoMdClose
              onClick={() => setMenu(false)}
              className=" text-white text-2xl"
            />
          ) : (
            <MdOutlineMenu
              onClick={() => setMenu(true)}
              className=" text-white text-2xl"
            />
          )}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
