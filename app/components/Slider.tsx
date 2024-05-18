import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from "../../public/assets/2f7c88d0ef2789666b3ceeb195b841a8.png";
import { GoDotFill } from "react-icons/go";

const slideImages = [
  {
    src: image1.src,
    text: 'Explore Our World Of Products'
  },
  {
    src: image1.src,
    text: 'Explore Our World Of Products'
  },
  {
    src: image1.src,
    text: 'Explore Our World Of Products'
  },
];

export const Slider = () => {
  return (
    <div className="slide-container font-poppins bg-slate-200 mt-16">
      <Slide>
        {slideImages.map((slideImage, index)=> (
          <div key={index} className='flex justify-center mt-8 p-4 sm:mt-14 sm:p-10'>
            <div className='font-bold text-[32px] sm:text-[60px] w-full sm:w-[40%]'>
              <div className="flex flex-col items-center space-y-2 mt-8 sm:mt-16 relative">
                <div className="bg-[#A26CFA] text-white px-2 py-1 rounded h-[2rem] sm:h-[3rem] w-[10rem] sm:w-[15rem] -z-5 mb-4 sm:mb-8" style={{transform: 'rotate(-3deg)'}}>
                </div>
                <div className="flex gap-4 sm:gap-10 absolute text-black top-0 left-[25%] sm:left-[30%]">
                  <GoDotFill className="text-3xl md:text-4xl" />
                  <div className="text-3xl sm:text-4xl font-black">Explore</div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black">
                  <span className="absolute top-[60%] sm:top-[68%] z-10 left-[30%] sm:left-[42%]">Our World</span>
                </h1>
                <div className="bg-[#67D75E] px-2 py-1 rounded h-[2rem] sm:h-[3rem] w-[10rem] sm:w-[15rem] mt-2 sm:mt-4 absolute left-[28%] sm:left-[35%] top-[80%] sm:top-[90%]" style={{transform: 'rotate(-3deg)'}}>
                </div>
                <div className="absolute text-3xl sm:text-4xl font-black bottom-0 left-[30%] sm:left-[42%] top-[87%] sm:top-[97%] mb-2 sm:mb-4">of</div>
                <div className="absolute text-3xl sm:text-4xl font-black bottom-[-100%] left-[30%] sm:left-[42%]">Products</div>
              </div>
            </div>
            <div className='h-[15rem] sm:h-[20rem] w-full sm:w-[35rem]' style={{backgroundImage: `url(${slideImage.src})`, backgroundSize: "cover"}}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
