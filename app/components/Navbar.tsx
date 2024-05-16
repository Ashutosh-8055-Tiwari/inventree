
import Image from "next/image";
import image1 from "../../public/assets/aaf7d3340fbc40dd0615397d8f74d8c8.png";
import image2 from "../../public/assets/aa510d0892be7818529328e69c70cb52.png";
import image3 from "../../public/assets/f0842ea06891f3e868e8a25bf7034faa.png";
import image4 from "../../public/assets/1175a4f6a35758aae13da3e172624ab3.png";
import image5 from "../../public/assets/8c16e4d294fc2239672bab08cc6fd241.png";
import React from "react";
import Link from "next/link";


export const Navbar = () => {
  return (
    <div className="w-full relative m-2 font-poppins">
      <nav className="flex flex-col md:flex-row items-center justify-between mb-2 md:mb-0">
        <div className="mb-4 md:mb-0">
          <Image src={image1} alt="" height={110} width={110} />
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href={"/"} className="nav-item w-[7rem] text-[14.25px] bg-black text-white flex justify-center items-center rounded-sm hover:cursor-pointer">Home Page</Link>
          <Link href="/pages/products" className="nav-item w-[7rem] text-[14.25px] bg-black text-white flex justify-center items-center rounded-sm hover:cursor-pointer">Products</Link>
          <Link href={"/pages/about-us"} className="nav-item w-[7rem] text-[14.25px] bg-black text-white flex justify-center items-center rounded-sm hover:cursor-pointer">About Us</Link>
          <Link href={"/pages/contact-us"} className="nav-item w-[7rem] text-[14.25px] bg-black text-white flex justify-center items-center rounded-sm hover:cursor-pointer">Contact Us</Link>
          <Link href={"/pages/partner-with-us"} className="nav-item w-[7rem] text-[14.25px] bg-black text-white flex justify-center items-center rounded-sm hover:cursor-pointer">Partner with us</Link>
          <div>
            <Image src={image2} alt="" width={45} height={35} className="cursor-pointer hidden md:block" />
          </div>
        </div>
      </nav>
      <div className="absolute flex gap-10 justify-center items-center bottom-[-30px] right-[70px] w-[15rem]">
        <div className="cursor-pointer hidden md:block">
          <Image src={image3} alt="" height={35} width={35} />
        </div>
        <div className="cursor-pointer hidden md:block">
          <Image src={image4} alt="" height={35} width={35} />
        </div>
        <div className="cursor-pointer hidden md:block">
          <Image src={image5} alt="" height={35} width={35} />
        </div>
      </div>
    </div>
  );
};
