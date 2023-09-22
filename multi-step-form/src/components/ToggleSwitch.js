import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectPlan, timePeriod } from "../store/formSlice";

const ToggleSwitch = ({ setSelectedCardIndex }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setSelectedCardIndex(null);
    dispatch(timePeriod());
    dispatch(selectPlan(null));
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex gap-5  items-center cursor-pointer">
      <span
        className={`text-sm font-semibold  ${
          isChecked ? "text-Lightgray" : "text-Marineblue"
        } `}
      >
        Monthly
      </span>
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleSwitch}
        />
        <div className="w-10 h-5  bg-Marineblue rounded-full shadow-inner"></div>
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full  transition-transform duration-300 ease-in-out ${
            isChecked ? "transform translate-x-5" : "transform translate-x-0"
          }`}
        ></div>
      </div>
      <span
        className={`text-sm font-semibold ${
          isChecked ? "text-Marineblue" : "text-Lightgray"
        }`}
      >
        Yearly
      </span>
    </label>
  );
};

export default ToggleSwitch;
