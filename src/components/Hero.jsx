import React from "react";
import { Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-primary font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data.
        </h1>
        <div >
            <p className="md:text-5xl sm:text-4xltext-xl font-bold">
                fast, flexible financing for
                <span className="text-primary">  BTB, BTC, and SASS</span> platforms
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
