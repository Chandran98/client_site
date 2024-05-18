import Slider from "../components/slider";
import Footer from "../components/footer";
import Partners from "../components/partners";
import Service from "@/components/service";
import Showcase from "@/components/showcase";
import ProviderImage from "@/components/providerImage";
import Headers from "@/components/header";

export default function Home() {
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
