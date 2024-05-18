"use client";
import Image from "next/image";
import React, { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import Menu from "./menu";
const Header = () => {
  // const [openMenu, setMenu]=useState(false);

  return (
    <div className="   bg-transparent">
      <div className=" absolute top-0 p-6 flex w-full items-center justify-between">
        <Image
          src="https://themezinho.net/verno/images/logo.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <div className=" flex gap-3  items-center justify-center">
          <div className=" text-white text-xl"> MENU</div>
          <Link href="/menu">
            <MdOutlineMenu className=" text-white text-2xl" />
          </Link>
        </div>
      </div>

      {/* {openMenu && <Menu/>} */}
    </div>
  );
};

export default Header;
