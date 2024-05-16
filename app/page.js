import Image from "next/image";
import Slider from "../components/slider";
import { FaHeart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
// import {  Sho} from "../components/section";

export default function Home() {
  // const { scrollYProgress } = useScroll();

  return (
    <>
      <Slider />
      <div className="   bg-transparent">
        <div className=" absolute top-0 p-6 flex w-screen items-start justify-between">
          <Image
            src="https://themezinho.net/verno/images/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <div className=" flex gap-3  items-center justify-center">
            <div className=" text-white text-xl"> MENU</div>
            <MdOutlineMenu className=" text-white text-2xl" />
          </div>
        </div>
      </div>
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
        <img src={"/bg.jpg"} alt="#" className="  sticky top-0 z-0 w-screen h-screen" />
        <div className=" bg-transparent h-screen">

    
          {/* <Image src={"/bg.jpg"} width={100} height={100} alt="#" /> */}
        </div>
        <div className=" bg-red-500 h-screen">

    
{/* <Image src={"/bg.jpg"} width={100} height={100} alt="#" /> */}
</div>
      </div>
      <div id="contact" className="h-screen bg-red-200">
        <h1 className="text-4xl text-center pt-24">Contact div</h1>
      </div>
    </>
  );
}
