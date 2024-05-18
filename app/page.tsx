"use client";

import { Navbar } from "./components/Navbar";
import Slideshow from "./components/SlideShow";
import { Slider } from "./components/Slider";
import image1 from "../public/assets/aaf7d3340fbc40dd0615397d8f74d8c8.png";
import { Cards } from "./components/Cards";
import { CardData } from "./utils/constant";
import { WhyInventree } from "./components/WhyInventree";
import { ContactUs } from "./components/ContactUs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <div className="bg-[#FFFFFF] w-full relative p-4">

        <Navbar />

        <Slider />

        <Slideshow />

        <div className="bg-[#000000] text-white p-6 flex flex-col lg:flex-row justify-between h-auto lg:h-[491px] mt-14 font-poppins">
          <div className="space-y-6 w-full lg:w-[50%] lg:pr-8">
            <Link href={"/pages/partner-with-us"} className="text-xl font-bold uppercase text-[#1BB275]">Partner with us</Link>
            <h1 className="text-3xl font-bold  text-justify">Welcome to Inventree, where partnership means more than just collaboration.</h1>
            <p className="text-[#999999] text-lg text-justify">
              It's about building lasting relationships. Our success hinges on nurturing strong, long-term connections that fuel your growth journey. By joining forces with us, you gain access to a dedicated team committed to empowering your business with cutting-edge technology solutions.
            </p>
            <p className="text-[#999999] text-lg  text-justify">
              Together, we'll accelerate your growth and deliver unparalleled value to your customers. Partner with Inventree today and unlock the potential for success like never before.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-between">
            <button className="bg-[#1BB275] text-white font-bold text-xl lg:text-2xl py-2 px-4 rounded inline-flex justify-center items-center h-[3rem] lg:h-[4rem] w-[80%] lg:w-[378px] mb-4 lg:mb-0">
              <span>Partner with us</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <img src={image1.src} alt="Inventree Logo" className="mb-4 h-[298px] w-[378px]" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-10 px-4 font-poppins\">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold bg-[#070606] text-[#1BB275] p-4 dark:text-white">Discover the Future of Procurement</h1>
            <div className="flex flex-col justify-center items-center">
              <p className="mt-2 text-2xl text-[#1BB275] font-[600]">SERVICES</p>
              <p className="text-[#102C5B] font-bold text-3xl mt-2 w-full lg:w-[50%]">We Provide Best Solutions & Procurement Services</p>
            </div>
          </div>

          <Cards props={CardData} />

        </div>

        <WhyInventree />

        <div className="w-full bg-[#000000] text-white p-8 lg:p-16 mt-28 font-roboto ">
          <h1 className="text-3xl font-bold mb-16 text-[#1BB275] ">Our AI Powered Dashboard</h1>
          <div className="flex items-center justify-center flex-wrap gap-16">
            <div className="flex flex-col gap-16 flex-wrap">
              <div className="bg-[#D9D9D9] h-40 w-[30rem] rounded-lg p-4 "></div>
              <div className="bg-[#D9D9D9] h-40 w-[30rem] rounded-lg p-4 mt-4"></div>
            </div>
            <div className="flex flex-col gap-16 flex-wrap">
              <div className="bg-[#D9D9D9] h-40 w-[30rem] rounded-lg p-4"></div>
              <div className="bg-[#D9D9D9] h-40 w-[30rem] rounded-lg p-4 mt-4"></div>
            </div>
          </div>

        </div>








        <div className="bg-[#FFFFFF] p-8 lg:p-16 mt-32">
    <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#0047FF] mb-8 font-sans">With cutting-edge AI technology, we're evolving swiftly to deliver unparalleled services to our customers.</h1>
        <p className="text-[#000000] mb-16 font-roboto">Embracing the rapid advancements in AI, we're dedicated to continuously enhancing our services, ensuring seamless experiences for our valued customers. Stay ahead of the curve with Inventree's innovative solutions.</p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-stretch gap-4">
            <Link href={"/pages/partner-with-us"} className="bg-[#1BB275] font-poppins text-white font-bold text-xl px-6 py-2 rounded-md lg:w-[20rem] h-[3rem] lg:h-[3.5rem] mb-4 lg:mb-0">Know our vendors →</Link >
            <Link href={"/pages/partner-with-us"} className="bg-[#1BB275] font-poppins text-white font-bold text-xl px-6 py-2 rounded-md lg:w-[20rem] h-[3rem] lg:h-[3.5rem]">Know our values →</Link >
        </div>
    </div>
</div>


        <ContactUs />

      </div>
    </main>
  );
}
