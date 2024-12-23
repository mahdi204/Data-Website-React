import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYSTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analystics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            numquam corporis vel sed, temporibus non! Nulla aliquam dicta,
            voluptate enim odio sed impedit cupiditate corrupti ipsa obcaecati
            repellendus alias? Labore.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6  md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
