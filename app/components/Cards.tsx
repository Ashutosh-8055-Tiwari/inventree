import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";

export const Cards = ({ props }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {props.map((item: any, index: any) => (
        <div key={index} className="bg-[#000000] p-4 rounded-lg shadow-lg flex flex-col justify-center items-center ">
          <img src={item.image} alt="End-to-End Solutions" className="mb-3 h-[170px] w-full" />
          <h2 className="text-2xl font-semibold text-[#FFFFFF] mb-8">{item.title}</h2>
          <div className='w-full h-[0.02rem] bg-[#FFFFFF] mb-2'></div>
          <div className='flex justify-between w-full p-4'>
            <p className='text-[#1BB275] text-sm'>
                Find Out More
            </p>
            <FaCircleArrowRight className='text-[#1BB275] text-[25px]'/>
          </div>
        </div>
      ))}
    </div>
  );
};
