import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-cusblack p-2 px-5 grid grid-cols-2">
      <div className="text-white text-sm text-center ">
        <p>© Copyright 2022 barbershop - All right reserved</p>
      </div>
      <div className="flex justify-center gap-10 items-center">
        <Image src="/Vector.png" alt="icon" width={10} height={2} />
        <Image src="/Twitter.png" alt="icon" width={20} height={2} />
        <Image src="/Instagram.png" alt="icon" width={20} height={2} />
        <Image src="/Vector (1).png" alt="icon" width={20} height={2} />
        <Image src="/Vector (2).png" alt="icon" width={20} height={2} />
      </div>
    </div>
  );
}
