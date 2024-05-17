import Image from "next/image";
import Slider from "../components/slider";
import { FaHeart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import Footer from "../components/footer";
import Partners from "../components/partners";
import Service from "@/components/service";

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
            <Link href="/about">
              <MdOutlineMenu className=" text-white text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      {/* </div>
      </div>
      <div id="about" className="h-screen bg-white"> */}
      {/* <div className="flex flex-col w-1/3 ml-52 items-start justify-start pt-24">
          <h1 className="text-8xl  font-bold text-center  mb-10">SHOWCASES</h1>
          <h2 className="text-xl  text-gray-400">
            We create digital experiences for brands communicating the unique
            services provided to your customers. Creativity for us something
            personal.
          </h2>
        </div> */}
      <main className="relative m-0">
        <section className=" h-screen z-10 bg-white">
          <div className="flex flex-col w-1/3 ml-52 items-start justify-start pt-24">
            <h1 className="text-8xl  font-bold text-center  mb-10">
              SHOWCASES
            </h1>
            <h2 className="text-xl  text-gray-400">
              We create digital experiences for brands communicating the unique
              services provided to your customers. Creativity for us something
              personal.
            </h2>
          </div>
        </section>

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
                We create digital experiences for brands communicating the
                unique services provided to your customers. Creativity for us
                something personal.
              </span>
              <span className=" font-semibold text-2xl mt-8">
                {" "}
                verno.digital
              </span>
            </div>
          </div>

          {/* <img src={"/slide01.jpg"} alt={"text"} className=" object-fill w-screen h-screen" /> */}
        </section>
        <Service />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
