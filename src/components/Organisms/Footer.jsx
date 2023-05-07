import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="fixed mix-blend-difference bottom-0 w-full items-center flex justify-around text-white md:p-3 backdrop-blur-md">
      <div className="text-gray-300 text-sm">
      <svg width="100" height="50" viewBox="0 0 440 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='duration-200 hover:opacity-20' d="M0.545455 17.1364V0.909088H77V17.1364H48.5V94H29.0455V17.1364H0.545455Z" fill="white" />
          <path className='duration-200 hover:opacity-20' d="M89.0909 94V0.909088H151.818V17.1364H108.773V39.3182H148.591V55.5455H108.773V77.7727H152V94H89.0909Z" fill="white" />
          <path className='duration-200 hover:opacity-20' d="M245.955 0.909088V94H228.955L188.455 35.4091H187.773V94H168.091V0.909088H185.364L225.545 59.4545H226.364V0.909088H245.955Z" fill="white" />
          <path className='duration-200 hover:opacity-20' d="M277.909 0.909088L300.409 71.6364H301.273L323.818 0.909088H345.636L313.545 94H288.182L256.045 0.909088H277.909Z" fill="white" />
          <path className='duration-200 hover:opacity-20' d="M351.636 0.909088H373.682L394.909 41H395.818L417.045 0.909088H439.091L405.136 61.0909V94H385.591V61.0909L351.636 0.909088Z" fill="white" />
        </svg>
      </div>
      <div></div>
      <div className="text-gray-300 text-sm">© 2023</div>
    </div>
  );
};
