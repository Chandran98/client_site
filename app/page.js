import Slider from "../components/slider";
import Footer from "../components/footer";
import Partners from "../components/partners";
import Service from "@/components/service";
import Showcase from "@/components/showcase";
import ProviderImage from "@/components/providerImage";
import Headers from "@/components/header";
// import { useEffect } from "react";
// import {motion,useScroll} from 'framer-motion'

export default function Home() {

  // const {}=useScroll();
  return (
    <>
      <Slider />
      <Headers />
      <Showcase />
      <ProviderImage />
      <Service />
      <Partners />
      <Footer />
    </>
  );
}
