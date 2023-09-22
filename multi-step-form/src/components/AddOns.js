import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "../store/formSlice";
import CheckBox from "./CheckBox";
import { toast } from "react-toastify";
import { addOnsTypes } from "../utils/constant";

const AddOns = () => {
  const dispatch = useDispatch();
  const { addOns } = useSelector((store) => store.form);

  const handleNext = () => {
    if (addOns.length === 0) {
      toast.error("atleast check one");
      return;
    }
    dispatch(nextStep(4));
  };

  return (
    <div className="flex flex-col justify-around w-7/12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold"> Pick add-ons</h1>
        <p className="text-Coolgray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="space-y-5">
        {addOnsTypes.map((item, index) => (
          <CheckBox key={`chekbox${index}`} id={index} item={item} />
        ))}
      </div>

      <div className="flex justify-between">
        <span
          onClick={() => dispatch(backStep())}
          className="text-Marineblue cursor-pointer my-auto"
        >
          Go Back
        </span>
        <button
          type="button"
          onClick={handleNext}
          className=" bg-Marineblue text-white px-1 py-2 rounded-lg w-1/4"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;