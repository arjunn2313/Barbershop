import { Barlow } from "next/font/google";
import Image from "next/image";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ChooseUs() {
  const data = [
    {
      id: 1,
      title: "Licensed",
      desc1:
        "Our team of licensed and insured barbers follow strict cleanliness and sanitation guidelines for a safe and comfortable experience. ",

      img: "/licensed icon.png",
    },
    {
      id: 2,
      title: "Masters",
      desc1:
        " Our barbers are passionate about their craft and aim to provide high-quality haircuts for every client. ",

      img: "/masters icon.png",
    },
    {
      id: 3,
      title: "Trusted",
      desc1:
        "We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients.",

      img: "/trusted icon.png",
    },
  ];
  return (
    <div className="min-h-screen py-14 space-y-11">
      {/* sec 1 */}
      <div className="text-center w-1/2 mx-auto space-y-4">
        <h2 className={`text-4xl font-bold uppercase ${barlow.className}`}>
          why choose us
        </h2>
        <p className="text-gray-700 w-3/4 mx-auto text-sm">
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          prci eu magna in senectus sit eget justo eget.
        </p>
      </div>

      {/* sec 2 */}
      <div className=" w-[80%] mx-auto flex justify-evenly items-center py-8  ">
        {data.map((itm) => (
          <div
            className="flex flex-col justify-center items-center text-center  p-3 space-y-3"
            key={itm.id}
          >
            <Image src={itm.img} width={40} height={40} />
            <div className=" flex flex-col justify-center items-center space-y-4">
              <h2 className="border-b-4 border-dark-vanilla font-bold uppercase text-2xl">
                {itm.title}
              </h2>
              <p className="font-normal text-sm w-3/4 text-gray-900">
                {itm.desc1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* sec 3 */}

      <div className="grid grid-cols-4 gap-4 w-[85%] mx-auto py-16">
        <div className="col-span-1   p-2 flex flex-col justify-center items-center gap-3">
          <Image src="/icon-google.png" alt="google" width={30} height={30} />
          <p className="font-semibold">GOOGLE</p>
          <h2 className="text-5xl font-bold">4.9</h2>
          <Image src="/star.png" alt="google" width={96} height={96} />
          <p className="-tracking-wide">196 reviews</p>
        </div>
        <div className="col-span-2  p-2 border border-dark-vanilla py-5">
          <div className="flex flex-col   items-center">
            <Image
              src="/Image Thumbnail.png"
              alt="google"
              width={66}
              height={66}
              className="-m-12"
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-8 space-y-3">
            <Image src="/star.png" alt="google" width={96} height={96} />
            <h2 className="font-bold uppercase">THE BEST BARBER Services</h2>
            <p className="text-sm text-gray-800 text-center">
              Et proin ut in dignissim sem non a nullam magna lectus urna et dui
              quam tellus imperdiet sit purus at fringilla scelerisque diam amet
              fermentum orci fringilla aliquet nulla lectus erat eu auctor
            </p>
            <p className="text-sm font-medium">SAM HOUSTON</p>
          </div>
        </div>
        <div className="col-span-1   p-2 flex flex-col justify-center items-center gap-3">
          <Image src="/icon-tripadvisor.png" alt="google" width={30} height={30} />
          <p className="font-semibold uppercase">tripadvisor</p>
          <h2 className="text-5xl font-bold">4.9</h2>
          <Image src="/star.png" alt="google" width={96} height={96} />
          <p className="tracking-wide">196 reviews</p>
        </div>
      </div>
    </div>
  );
}
