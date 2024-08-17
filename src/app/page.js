import Image from "next/image";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Address from "./components/address/address";

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
    </div>
  );
}
