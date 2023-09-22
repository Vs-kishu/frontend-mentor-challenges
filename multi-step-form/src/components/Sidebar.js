import React from "react";
import { sideImg } from "../../assets";
import Steps from "./Steps";
import { sideOptions } from "../utils/constant";

const Sidebar = () => {
  return (
    <div className="rounde-xl flex-shrink-0">
      <div className="md:relative">
        <img src={sideImg} alt="sidebar-d" />
        <div className="absolute top-10 left-5 flex flex-col gap-5">
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
