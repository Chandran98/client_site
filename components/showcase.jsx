/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Showcase = () => {

    const imgData = [
        {
          image: "/works01.jpg",
          title: "Start Engine",
          subtitle: "Mobile App & UI-UX Design",
        },
        {
          image: "/works04.jpg",
          title: "Kitchen",
          subtitle: "Corporate website & e-Commerce",
        },
        {
          image: "/works02.jpg",
          title: "Line Up",
          subtitle: "UI-UX Design & Mobile App",
        },
        {
          image: "/works03.jpg",
          title: "Moviester",
          subtitle: "Corporate website & Mobile App",
        },
        {
          image: "/works06.jpg",
          title: "Eventer",
          subtitle: "e-Commerce & UI UX Design",
        },
        {
          image: "/works05.jpg",
          title: "QBS Bank",
          subtitle: "Mobile App & Website",
        },
        // ,
        // "/works04.jpg",
        // "/works02.jpg",
        // "/works03.jpg",
        // "/works06.jpg",
        // "/works05.jpg",
        // "/works01.jpg",
        // "/works01.jpg",
        // "/works01.jpg",
      ];
  return (
    <section className="  z-10 bg-white">
    <div className="flex flex-col w-1/3 ml-40 items-start justify-start pt-24">
      <h1 className="text-8xl  font-bold text-center  mb-10">
        SHOWCASES
      </h1>
      <h2 className="text-xl  leading-9 text-gray-400">
        We create digital experiences for brands communicating the unique
        services provided to your customers. Creativity for us something
        personal.
      </h2>
    </div>

    <div className="columns-2  md:columns-2   lg:columns-3 gap-16   space-y-16 p-36">
      {imgData.map((e,i) => {
        return (
          <>
            <div key={i} className="h-min w-full hover:scale-105 bg-transparent  hover:shadow-gray-400   transform transition ease-in-out  duration-75">
              <img className="object-cover" src={e.image} alt="#" />
              <h3 className="mt-5 text-gray-400">{e.subtitle}</h3>
              <h1 className="mb-3 mt-2 text-3xl font-bold">{e.title}</h1>
            </div>
          </>
        );
      })}
    </div>
  </section>
  )
}

export default Showcase