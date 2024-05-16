"use client";
import React from 'react';

export const ContactUs = () => {
  return (
    <div className="bg-black text-white p-8 flex flex-col lg:flex-row gap-10 justify-center items-center lg:h-[25rem] font-roboto mt-28">
      <div className="w-full lg:w-[50%]">
        <h1 className="text-4xl font-bold mb-8 text-[#1BB275]">Contact us</h1>
        <p className="mb-8 lg:w-[70%]">Stay connected with us via email or follow our latest updates on Facebook, Twitter, or Google+ to stay informed about the latest technological advancements.</p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-auto">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
          <input type="text" id="first-name" name="first-name" className="mb-6 bg-transparent border-b border-zinc-500 w-full text-white focus:outline-none focus:border-white transition-colors" />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
          <input type="text" id="last-name" name="last-name" className="mb-6 bg-transparent border-b border-zinc-500 w-full text-white focus:outline-none focus:border-white transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
          <input type="email" id="email" name="email" className="mb-6 bg-transparent border-b border-zinc-500 w-full text-white focus:outline-none focus:border-white transition-colors" />
        </div>
        <div>
          <label htmlFor="contact-no" className="block text-sm font-medium">Contact No</label>
          <input type="text" id="contact-no" name="contact-no" className="mb-6 bg-transparent border-b border-zinc-500 w-full text-white focus:outline-none focus:border-white transition-colors" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="text-center block text-sm font-medium">How can we help you today?</label>
          <textarea id="message" name="message" className="bg-transparent border-b border-zinc-500 w-full text-white h-24 focus:outline-none focus:border-white transition-colors"></textarea>
        </div>
      </form>
    </div>
  );
};
