import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
            <h1 className="md:text4xl sm:text-3xl text-2xl font-bold py-2">Want tips and tricks to improve flow </h1>
            <p>Sign up to our newsletter to stay up to date </p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
                type="email"
                placeholder="Enter your email"
                className=" bg-white p-3 flex w-full rounded-md text-black"
                
            />
            <button className="text-black bg-primary w-[200px] rounded-md font-medium ml-4 my-6 0 py-3">Notify me </button>
            </div>  <p>We care about the protection of your data. Read our <span className="text-primary">Privacy Policy.</span></p>
        </div>
      
      </div>
    </div>
  );
};

export default Newsletter;
