import React, { useContext } from 'react';
import ScrollContext from './ScrollContext';

import { FaCircleCheck } from "react-icons/fa6";

const FifthSection = () => {
    const { pricingRef } = useContext(ScrollContext);


  return (
    <div id='pricing' ref={pricingRef} className="fifthSection flex flex-col gap-12 px-[100px] py-16">
      <section className="flex m-auto justify-center text-center w-2/4 items-center flex-col gap-1">
        <h1 className="font-orbitron font-bold text-white text-[3.125rem]">
          Subscription
        </h1>
        <h3 className="font-normal text-sm text-[#A1AEB7]">
          Your information is secure and encrypted, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliquat enim ad minim.
        </h3>
      </section>

      <section className="flex justify-center items-center gap-8">
        <div className="flex flex-col justify-between w-[21rem] h-[25rem] rounded-lg p-[30px] bg-[#0E0E0E] text-white">
          <section className="flex flex-col gap-4">
            <h4 className="text-base opacity-50 font-normal">1 MONTH</h4>
            <span className="flex gap-[6px] items-center">
              <h2 className="font-orbitron text-white font-bold text-5xl">
                1.5
              </h2>
              <h4 className="text-white opacity-50 font-normal text-sm">
                SOLANA
              </h4>
            </span>
            <div className="h-[1px] w-full text-[#C2D1D9] bg-[#C2D1D9]"></div>
            <div className="flex w-fit gap-[10px]">
              <FaCircleCheck className="text-base" />
              <h4 className="text-sm flex-1">
                1 month full access to exclusive content
              </h4>
            </div>
          </section>

          <section className="">
            <button className="flex items-center font-normal text-base gap-[10px] border border-white p-[10px] rounded-[4px] w-full justify-center">
              <div className="w-[7px] h-[7px] bg-white rounded-full"></div>
              Get Started
            </button>
          </section>
        </div>

        <div className="flex flex-col justify-between w-[21rem] h-[25rem] rounded-lg p-[30px] bg-[#D9D9D9] text-black">
          <section className="flex flex-col gap-4">
            <h4 className="text-base opacity-50 font-normal">3 MONTHS</h4>
            <span className="flex gap-[6px] items-center">
              <h2 className="font-orbitron text-black font-bold text-5xl">
                3.5
              </h2>
              <h4 className="text-black opacity-50 font-normal text-sm">
                SOLANA
              </h4>
            </span>
            <div className="h-[1px] w-full bg-black"></div>
            <div className="flex w-fit gap-[10px]">
              <FaCircleCheck className="text-base" />
              <h4 className="text-sm flex-1">
                3 months full access to exclusive content
              </h4>
            </div>
            <div className="flex w-fit gap-[10px]">
              <FaCircleCheck className="text-base" />
              <h4 className="text-sm flex-1">
                Early access to new release and features
              </h4>
            </div>
          </section>

          <section className="">
            <button className="flex items-center font-normal text-base gap-[10px] bg-black text-white p-[10px] rounded-[4px] w-full justify-center">
              Get Started
            </button>
          </section>
        </div>

        <div className="flex flex-col justify-between w-[21rem] h-[25rem] rounded-lg p-[30px] bg-[#0E0E0E] text-white">
          <section className="flex flex-col gap-4">
            <h4 className="text-base opacity-50 font-normal">LIFETIME</h4>
            <span className="flex gap-[6px] items-center">
              <h2 className="font-orbitron text-white font-bold text-5xl">9</h2>
              <h4 className="text-white opacity-50 font-normal text-sm">
                SOLANA
              </h4>
            </span>
            <div className="h-[1px] w-full text-[#C2D1D9] bg-[#C2D1D9]"></div>
            <div className="flex w-fit gap-[10px]">
              <FaCircleCheck className="text-base" />
              <h4 className="text-sm flex-1">
                Life time full access to exclusive content and perks
              </h4>
            </div>
            <div className="flex w-fit gap-[10px]">
              <FaCircleCheck className="text-base" />
              <h4 className="text-sm flex-1">
                Early access to new release and features
              </h4>
            </div>
            <div className="flex w-fit gap-[10px]">
              <FaCircleCheck className="text-base" />
              <h4 className="text-sm flex-1">VIP support and assistance</h4>
            </div>
          </section>

          <section className="">
            <button className="flex items-center font-normal text-base gap-[10px] border border-white p-[10px] rounded-[4px] w-full justify-center">
              <div className="w-[7px] h-[7px] bg-white rounded-full"></div>
              Get Started
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default FifthSection;
