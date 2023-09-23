import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlan } from "../store/formSlice";

const PlanCard = ({ props }) => {
  const { item, index, selectedType, handleCardClick } = props;
  const { img, Mprice, Yprice, type, free } = item;
  const dispatch = useDispatch();
  const { yearly } = useSelector((store) => store.form);

  const handleCardClickWithDispatch = () => {
    {
      !yearly && dispatch(selectPlan({ Mprice, type }));
    }
    {
      yearly && dispatch(selectPlan({ Yprice, type, free }));
    }
    handleCardClick(type);
  };
  return (
    <div
      onClick={handleCardClickWithDispatch}
      className={`w-full sm:w-52 sm:h-40 py-3 px-2 flex flex-row sm:flex-col ${
        selectedType === type && "bg-Magnolia"
      } justify-between rounded-lg cursor-pointer border-2 border-Lightgray hover:bg-Magnolia hover:border-2`}
    >
      <div>
        <img src={img} alt="plans" />
      </div>
      <div className="flex flex-row sm:flex-col gap-1">
        <span className="text-Marineblue font-semibold">{type}</span>
        {!yearly && <span className="text-sm text-Coolgray">${Mprice}/m</span>}
        {yearly && <span className="text-sm text-Coolgray">${Yprice}/yr</span>}
        {yearly && (
          <span className="text-xs text-Marineblue">{free} month free</span>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
