import Image from "next/image";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Address from "./components/address/address";
import Experience from "./components/experience/experience";
import ChooseUs from "./components/chooseUs/chooseUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div>
          <Hero />
        </div>
        <div className="absolute w-full -m-14 mx-auto">
          <Address />
        </div>
        <div>
          <About />
        </div>
      </div>

      <Experience />
      <ChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
