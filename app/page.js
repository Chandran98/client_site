import Slider from "../components/slider";

export default function Home() {
  // const { scrollYProgress } = useScroll();

  return (
    //     <div className="relative ">
    //       {/* <SliderComponent/> */}
    // {/*
    //       <div className=" fixed inset-0 z-0 bg-gray-900"></div> */}
    //       <Sliders/>
    //       {/* <div className="relative  bg-yellow-200  "></div> */}
    //       <div className=" h-screen  bg-white"></div>
    //       <div className=" h-screen bg-cyan-200"></div>
    //     </div>
    // <div className="w-full    h-screen bg-gray-200  justify-center z-0 items-center" data-src="/slide01.jpg">
    //   {/* <Sliders /> */}

    //   <div className=" h-screen  bg-slate-500"> Menu</div>

    //   <div className="h-screen absolute bg-cyan-500"> Menu</div>

    //   <div className="h-screen  bg-red-500"> Menu</div>
    // </div>
    <div>
    <Slider />  <main className="relative z-10">
        <section id="about" className="h-screen bg-gray-100">
          <h1 className="text-4xl text-center pt-24">About Section</h1>
        </section>
        <section id="contact" className="h-screen bg-gray-200">
          <h1 className="text-4xl text-center pt-24">Contact Section</h1>
        </section>
      </main>
  </div>
  );
}
