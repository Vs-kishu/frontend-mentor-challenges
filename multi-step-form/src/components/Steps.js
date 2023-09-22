import React from "react";
import { useSelector } from "react-redux";

const Steps = ({ step, option }) => {
  const storeStep = useSelector((store) => store.form.step);
  return (
    <div className="flex gap-4 items-center ">
      <span
        className={`w-10 h-10 flex justify-center text-white border-2 border-Pastelblue items-center rounded-full ${
          step == storeStep && "bg-Pastelblue text-black"
        }  border-white`}
      >
        {step}
      </span>
      <div>
        <span className="font-extralight text-sm text-Coolgray">
          STEP {step}
        </span>
        <p className="fonr-semibold  text-White">{option}</p>
      </div>
    </div>
  );
};

export default Steps;
