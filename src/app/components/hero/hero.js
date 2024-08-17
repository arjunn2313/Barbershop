import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Hero Header.png')" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div>
          <h1 className={`text-6xl font-bold uppercase ${barlow.className}`}>
            The ultimate convenience
          </h1>
          <h1
            className={`text-6xl font-bold uppercase mt-3 ${barlow.className}`}
          >
            {" "}
            for busy people
          </h1>
          <p className="mt-4 text-lg font-medium tracking-wide">
            Experience the Convenience of In-Home Barber Services
          </p>
        </div>

        <div className="space-x-5 mt-5 pt-10 font-semibold">
          <button className="bg-dark-vanilla p-3 text-black uppercase ">
            Book an Appointment
          </button>
          <button className="bg-transparent border-2 border-white p-3 uppercase">
            browse services
          </button>
        </div>
      </div>
    </div>
  );
}
