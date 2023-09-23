import React from "react";
import { sideImg } from "../../assets";
import Steps from "./Steps";
import { sideOptions } from "../utils/constant";

const Sidebar = () => {
  return (
    <div className="rounde-xl  md:flex-shrink-0 ">
      <div className=" max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:h-52 md:relative">
        <img
          src={sideImg}
          className="w-full h-full object-cover "
          alt="sidebar-d"
        />
        <div className="absolute top-10 right-0 left-0 max-md:justify-center md:left-5 flex flex-row md:flex-col gap-5">
          {sideOptions.map((item, index) => (
            <Steps
              key={`step${index}`}
              index={index}
              step={item.step}
              option={item.option}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
