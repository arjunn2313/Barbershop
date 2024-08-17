import { Barlow } from "next/font/google";
import Image from "next/image";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/image (1).png')" }}
        className="relative h-fit bg-cover bg-center  "
      >
        <div className="grid grid-cols-2 p-10 gap-5 w-[90%] mx-auto   h-full">
          <div className="space-y-4 text-white">
            <h2
              className={`uppercase text-white font-bold text-7xl ${barlow.className}`}
            >
              make an{" "}
            </h2>
            <h2
              className={`uppercase text-white font-bold text-7xl ${barlow.className}`}
            >
              appointment
            </h2>
            <p className="text-white text-md w-3/4">
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel prci eu magna in senectus sit eget justo
            </p>
            <div className="flex   items-center gap-6 p-5   ">
              <Image
                src="/mobile.png"
                alt="img"
                width={64}
                height={64}
                className="h-12 w-12 object-cover"
              />
              <div className="space-y-2">
                <p
                  className={`text-xl font-bold uppercase ${barlow.className}`}
                >
                  Give us a Call
                </p>
                <p className="  text-sm    "> (475) 453 - 3465</p>
              </div>
            </div>

            <div className="flex   items-center gap-6 p-5   ">
              <Image
                src="/email.png"
                alt="img"
                width={64}
                height={64}
                className="h-12 w-12 object-cover"
              />
              <div className="space-y-2">
                <p
                  className={`text-xl font-bold uppercase ${barlow.className}`}
                >
                  Send us an email
                </p>
                <p className="  text-sm    ">hello@example.com</p>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="relative">
            <div className="bg-white w-[90%] z-10 absolute mt-44">
              <div className="p-10 ">
                <form>
                  <div className="w-full mb-5">
                    <label className="uppercase font-semibold">Full Name</label>
                    <br />
                    <input
                      type="text"
                      className="w-full border-b-2 border-black focus:right-0 outline-none"
                    />
                  </div>
                  <div className="w-full  mb-5">
                    <label className="uppercase font-semibold">subject</label>
                    <br />
                    <input
                      type="text"
                      className="w-full border-b-2 border-black focus:right-0 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <div className="w-full  ">
                      <label className="uppercase font-semibold">
                        phone number
                      </label>
                      <br />
                      <input
                        type="text"
                        className="w-full border-b-2 border-black focus:right-0 outline-none"
                      />
                    </div>{" "}
                    <div className="w-full  ">
                      <label className="uppercase font-semibold">
                        email address
                      </label>
                      <br />
                      <input
                        type="text"
                        className="w-full border-b-2 border-black focus:right-0 outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full  mb-5">
                    <label className="uppercase font-semibold">
                      Please type your message here...
                    </label>
                    <br />
                    <textarea
                      type="text"
                      className="w-full border-b-2 border-black focus:right-0 outline-none h-24"
                    />
                  </div>
                  <div className="  font-semibold">
                    <button className="bg-dark-vanilla p-3 text-black uppercase ">
                      Book an Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/map.png')" }}
        ></div>
      </div>
    </div>
  );
}
