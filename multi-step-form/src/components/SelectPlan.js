import React, { useEffect, useState } from "react";
import { cards } from "../utils/constant";
import PlanCard from "./PlanCard";
import ToggleSwitch from "./ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "../store/formSlice";
import { toast } from "react-toastify";

export const SelectPlan = () => {
  const dispatch = useDispatch();
  const { plan } = useSelector((store) => store.form);
  const [selectedType, setSelectedType] = useState(null);
  const handleCardClick = (type) => {
    setSelectedType(type);
  };
  useEffect(() => {
    if (plan?.type) {
      setSelectedType(plan?.type);
    }
    return;
  });

  const handleNext = () => {
    if (selectedType === null) {
      toast.error("Please select a card");
      return;
    }
    dispatch(nextStep(3));
  };
  return (
    <div className="flex flex-col justify-around w-full max-md:space-y-3">
      <div className="space-y-2">
        <h1 className="text-xl sm:text-3xl font-semibold">Select your plan</h1>
        <p className="text-Coolgray max-sm:text-sm">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-5">
        {cards.map((item, index) => (
          <PlanCard
            props={{
              item,
              index,
              selectedType,
              handleCardClick,
            }}
            key={index}
          />
        ))}
      </div>
      <div className="flex py-2 bg-Magnolia justify-center gap-5">
        <ToggleSwitch setSelectedType={setSelectedType} />
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
          className=" bg-Marineblue text-white px-1 py-2 rounded-lg w-32 whitespace-nowrap"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
