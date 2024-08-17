import Image from "next/image";
import React from "react";

export default function Address() {
  const data = [
    {
      id: 1,
      title: "Address",
      desc1: "3696 Lynden Road, Lefroy  ",
      desc2: " Ontario canada",
      img: "/address img.png",
    },
    {
      id: 2,
      title: "phone",
      desc1: " +62(123)-456-7890",
      desc2: "  +62(123)-456-7890",
      img: "/phone img.png",
    },
    {
      id: 3,
      title: "Address",
      desc1: "Mon – Sat: 9AM – 8PM",
      desc2: "Sun: 9AM – 6PM",
      img: "/hours img.png",
    },
  ];

  return (
    <div className="bg-white w-[80%] mx-auto flex justify-evenly items-center py-3 shadow-lg rounded-sm ">
      {data.map((itm) => (
        <div className="flex flex-col justify-center items-center text-center  p-3 space-y-3" key={itm.id}>
          <Image src={itm.img} width={40} height={40} />
          <div className="uppercase flex flex-col justify-center items-center space-y-3">
            <h2 className="border-b-4 border-dark-vanilla font-semibold ">
              {itm.title}
            </h2>
            <p className="font-semibold text-sm">{itm.desc1}</p>
            <p className="font-semibold text-sm">{itm.desc2}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
