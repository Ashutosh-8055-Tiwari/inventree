"use client"
import image1 from "../../../public/assets/6a7db3d054410e88621d8ffca0db78a3.jpg"
import image2 from "../../../public/assets/35386d97399aeee2c5862212ecbf9c04.jpg"
import image3 from "../../../public/assets/b146f6b150cfc6d9125ac21631d51ed3.jpg"
import { services } from "@/app/utils/constant"

import { Navbar } from "@/app/components/Navbar";
import { WhyInventree } from "@/app/components/WhyInventree";
import { ContactUs } from "@/app/components/ContactUs"


const Page = () => {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <div className="bg-[#FFFFFF] w-full relative p-4">

      <Navbar />

      <div className="relative bg-white mt-32">
  <img src={image1.src} alt="People discussing over a laptop" className="w-full h-auto object-cover" />
  <div className="absolute inset-0 flex items-center p-4 ">
    <div className="absolute bottom-0 left-0 text-white p-8 w-full lg:w-1/2">
      <h2 className="text-lg md:text-4xl lg:text-5xl font-[500] mb-1 md:mb-8 lg:mb-12 font-poppins ">About Inventree</h2>
      <p className="font-[400] text-sm md:text-xl lg:text-2xl font-poppins text-justify">
        Welcome to Inventree, your trusted partner in innovative procurement and supply chain management solutions.
        At Inventree, we believe in transforming the way businesses operate by harnessing the power of cutting-edge AI technology
        and advanced analytics to deliver unparalleled services and insights.
      </p>
    </div>
  </div>
</div>



        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col py-8">
                
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
                <div className="w-full lg:w-[45%]">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-[600] text-[#4F74F6] font-roboto">Our Mission</h2>
                    <p className="mt-4 text-[#000000] font-poppins text-xl font-semibold  md:text-2xl text-justify">
                        Our mission is to empower businesses to thrive in today's fast-paced, dynamic marketplace. We
                        are committed to providing exceptional procurement solutions that streamline operations,
                        optimize inventory, and enhance supplier relationships. By leveraging the latest
                        advancements in AI, we help our partners achieve efficiency, accuracy, and scalability.
                    </p>
                    </div>
                    <img src={image2.src} alt="Mission Image" style={{objectFit:'contain'}} className="mt-4 h-64 md:h-80 lg:h-[500px] w-full lg:w-[500px]" />
                </div>
        
                
                <div className="flex flex-col lg:flex-row-reverse gap-16 justify-center items-center mt-8 lg:mt-16">
                    <div className="w-full lg:w-[45%]">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-[600] text-[#4F74F6] font-roboto">Our Team</h2>
                    <p className="mt-4 text-[#000000] font-poppins font-semibold text-xl md:text-2xl text-justify">
                        At Inventree, our team is our greatest asset. Comprising industry experts, data scientists,
                        and procurement specialists, we are passionate about delivering excellence and driving
                        innovation. Our collective expertise and dedication enable us to provide our clients with the
                        highest level of service and support.
                    </p>
                    </div>
                    <img src={image3.src} alt="Team Image" style={{objectFit:'contain'}} className="mt-4 h-64 md:h-80 lg:h-[500px] w-full lg:w-[500px]" />
                </div>
            </div>
        </div>

        <WhyInventree />



        <div className="max-w-4xl mx-auto p-4 mt-16">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-[600] font-roboto text-center mb-6 text-[#4F74F6]">What We Do</h2>
        <p className="text-center mb-8 text-[#000000] font-bold text-lg md:text-xl">At Inventree, we offer a comprehensive range of services designed to meet the unique needs of each client:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
                <div key={index} className="rounded-lg shadow-md py-4 px-4 bg-[#023B53] text-white">
                    <div className="flex justify-center">
                        <img src={service.src} alt={service.alt} className="w-32 h-24 md:w-48 md:h-48 object-cover rounded-lg" />
                    </div>
                    <h3 className="font-semibold text-center mt-4">{service.title}</h3>
                    <p className="text-md text-justify">{service.description}</p>
                </div>
            ))}
        </div>
        <div className="p-4 text-center mt-16">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-roboto mb-2 text-[#4F74F6] font-[600]">Get in Touch</h1>
            <p className="text-lg md:text-xl text-[#000000] font-roboto font-semibold text-justify mt-8">
                We invite you to join us on this journey of innovation and growth.
                Get in touch with us via email or follow us on Facebook, Twitter, or
                Google+ to stay updated with the latest technological advances.
                Let's work together to transform your procurement process and
                unlock new levels of success.
            </p>
        </div>
    </div>
   
        
    <ContactUs />

      </div>
    </main>
  )
}

export default Page;
