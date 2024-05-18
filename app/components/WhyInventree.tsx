import React from 'react';
import image1 from "../../public/assets/55535c0901ce2a92dab8661614e65018.png";
import Link from 'next/link';

export const WhyInventree = () => {
    return (
        <div className="mx-auto mt-24 p-6 bg-white font-roboto">
            <h2 className="text-2xl font-bold ml-4 mb-4 text-[#0066FF]">WHY INVENTREE</h2>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-4">
                    <h3 className="text-2xl font-bold mb-3">Experience the Future of Procurement with Inventree's AI-Powered Solutions.</h3>
                    <p className="mb-4 text-lg text-[#666666] text-justify font-semibold">Inventree stands out as the premier choice for businesses seeking a cutting-edge partner in procurement and supply chain management. Our commitment to innovation and excellence, coupled with advanced AI capabilities, ensures unmatched insights, error-free operations, and tailored solutions. With an intuitive interface and flexibility for experimentation, Inventree empowers businesses to thrive in today's dynamic marketplace. Choose Inventree and experience the transformative power of AI in procurement and supply chain management.</p>
                    <Link href={"/pages/about-us"}className="bg-[#1BB275] font-poppins text-xl text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Learn More About US</span>
                        <svg className="ml-2 w-8 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </Link>
                </div>
                <div className="md:w-1/2 p-4">
                    <div className="aspect-w-16 aspect-h-9">
                        <img src={image1.src} alt="AI Concept Image" className="object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};
