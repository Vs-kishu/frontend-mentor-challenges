import React, { useState } from "react";
import { cards } from "../utils/constant";
import PlanCard from "./PlanCard";
import ToggleSwitch from "./ToggleSwitch";
import { useDispatch } from "react-redux";
import { backStep, nextStep } from "../store/formSlice";

export const SelectPlan = () => {
  const dispatch = useDispatch();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleNext = () => {
    dispatch(nextStep(3));
  };
  return (
    <div className="flex flex-col justify-around w-7/12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Select your plan</h1>
        <p className="text-Coolgray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex gap-5">
        {cards.map((item, index) => (
          <PlanCard
            src={item.img}
            key={index}
            type={item.type}
            Mprice={item.Mprice}
            Yprice={item.Yprice}
            free={item.free}
            index={index}
            selectedCardIndex={selectedCardIndex}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div className="flex py-2 bg-Magnolia justify-center gap-5">
        <ToggleSwitch setSelectedCardIndex={setSelectedCardIndex} />
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
