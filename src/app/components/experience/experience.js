import React from "react";

import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Experience() {
  return (
    <div
      className="relative h-96 bg-cover bg-center py-20 space-y-10"
      style={{ backgroundImage: "url('/Hero Call to Action.png')" }}
    >
      <div
        className={` tracking-wider flex text-white flex-col justify-center items-center font-bold text-4xl space-y-6 ${barlow.className} uppercase`}
      >
        <h2>Experience the luxury of</h2>
        <h2>concierge barber services</h2>
        <h2>at your home</h2>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-dark-vanilla p-3 text-black uppercase ">
          Book an Appointment
        </button>
      </div>
    </div>
  );
}
