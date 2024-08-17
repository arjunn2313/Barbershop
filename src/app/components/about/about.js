import Image from "next/image";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const data = [
  {
    id: 1,
    title: "Adult haircut",
    desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    price: "$39 USD",
    img: "/Adult haircut img.png",
  },
  {
    id: 2,
    title: "Kids Haircut",
    desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    price: "$19 USD",
    img: "/Kids haircut img.png",
  },
  {
    id: 3,
    title: "Beard Trim",
    desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    price: "$29 USD",
    img: "/Beard trim img.png",
  },
  {
    id: 4,
    title: "Neck Shave",
    desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    price: "$39 USD",
    img: "/Barbershop.png",
  },
  {
    id: 5,
    title: "Scalp Moisturizing",
    desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    price: "$10 USD",
    img: "/Scalp moisturizing img.png",
  },
  {
    id: 6,
    title: "Beard Grooming",
    desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    price: "$49 USD",
    img: "/Image icon.png",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-cultured py-10 pt-40 ">
      {/* section 1 */}
      <div className="grid grid-cols-2 w-[80%] mx-auto pt-10">
        <div className="space-y-6 flex flex-col items-start justify-center ">
          <h2
            className={`text-5xl uppercase font-bold tracking-wide ${barlow.className}`}
          >
            Your personal <br /> barber service <br /> at your home
          </h2>
          <p className="text-gray-600">
            Nulla egestas sapien integer mi fermentum tellus <br /> tristique
            consequat pulvinar sagittis <br /> adipiscing egestas purus et mi{" "}
            <br />
            tempus semper id vel prci eu magna <br /> in senectus sit eget justo
          </p>

          <div className="flex gap-10">
            <span className="space-y-3">
              <h4 className="text-4xl font-semibold">
                99 <span className="text-dark-vanilla">%</span>
              </h4>
              <p className="text-sm font-semibold uppercase">
                Customer <br />
                Satisfaction
              </p>
            </span>

            <span className="space-y-3">
              <h4 className="text-4xl font-semibold">
                10 <span className="text-dark-vanilla">+</span>
              </h4>
              <p className="text-sm font-semibold uppercase">
                years of <br /> experience
              </p>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <Image
            src="/Image.png"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* section 2*/}
      <div className="w-[70%] mx-auto mt-10 space-y-10">
        <div className="text-center space-y-4">
          <h1 className={`text-5xl font-bold ${barlow.className}`}>
            Browse our services
          </h1>
          <p className="text-gray-600 text-sm w-1/2 mx-auto">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo eget.
          </p>
        </div>

        <div className="bg-white flex flex-wrap p-5 ">
          {data.map((itm) => (
            <div className="flex gap-6 p-5 w-1/2  " key={itm.id}>
              <Image
                src={itm.img}
                alt="img"
                width={64}
                height={64}
                className="h-12 w-12 object-cover"
              />
              <div className="space-y-2">
                <p
                  className={`text-2xl font-bold uppercase ${barlow.className}`}
                >
                  {itm.title}
                </p>
                <p className="text-gray-700 text-sm w-3/4">{itm.desc}</p>
                <p className="text-2xl font-bold uppercase">{itm.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-dark-vanilla p-3 text-black uppercase font-semibold">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
