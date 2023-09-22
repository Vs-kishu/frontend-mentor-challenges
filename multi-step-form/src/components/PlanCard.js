import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlan } from "../store/formSlice";

const PlanCard = ({
  src,
  type,
  Mprice,
  Yprice,
  free,
  selectedCardIndex,
  index,
  handleCardClick,
}) => {
  const dispatch = useDispatch();
  const { yearly } = useSelector((store) => store.form);

  const handleCardClickWithDispatch = (index, mprice, yprice) => {
    {
      !yearly && dispatch(selectPlan({ Mprice, type }));
    }
    {
      yearly && dispatch(selectPlan({ Yprice, type, free }));
    }
    handleCardClick(index);
  };
  return (
    <div
      onClick={() => handleCardClickWithDispatch(index, Mprice, Yprice)}
      className={`w-52 h-40 py-3 px-2 flex flex-col ${
        selectedCardIndex == index && "bg-Magnolia"
      } justify-between rounded-lg cursor-pointer border-2 border-Lightgray hover:bg-Magnolia hover:border-2`}
    >
      <div>
        <img src={src} alt="plans" />
      </div>
      <div className="flex flex-col gap-1">
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
