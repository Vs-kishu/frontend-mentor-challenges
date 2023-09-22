import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "../store/formSlice";

const Summary = () => {
  const dispatch = useDispatch();
  const { yearly, plan, addOns } = useSelector((store) => store.form);
  let totalAddons = 0; // Declare totalAddons outside of the forEach loop.

  if (yearly) {
    addOns.forEach((element) => {
      totalAddons += element.Yprice; // Accumulate the Yprice values.
    });
    TotalPrice = totalAddons + plan.Yprice;
  } else {
    addOns.forEach((element) => {
      totalAddons += element.Mprice; // Accumulate the Mprice values.
    });
    TotalPrice = totalAddons + plan.Mprice;
  }

  return (
    <div className="flex flex-col justify-around w-7/12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Finishing up</h1>
        <p className="text-Coolgray">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-Magnolia">
        <div className="flex justify-between items-center px-6  py-5">
          <div className="font-semibold text-Marineblue ">
            <p className="text-lg ">
              {plan.type}
              <span>({yearly ? "Yearly" : "Monthly"})</span>
            </p>
            <span
              className="underline text-lg font-medium text-Coolgray"
              onClick={() => dispatch(nextStep(2))}
            >
              change
            </span>{" "}
          </div>
          {yearly ? (
            <span>${plan?.Yprice}/yr</span>
          ) : (
            <span>${plan?.Mprice}/mo</span>
          )}
        </div>
        <hr className="bg-Lightgray h-0.5 w-11/12 mx-auto" />
        <div>
          {addOns?.map((item, index) => (
            <div className="flex justify-between px-5 py-5  ">
              <p className="text-Coolgray text-lg">{item?.type}</p>
              {yearly ? (
                <span>+${item?.Yprice}/yr</span>
              ) : (
                <span>+${item?.Mprice}/mo</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex  text-xl justify-between px-6 ">
        <p className="text-Coolgray">
          Totalyear(per {yearly ? "Year" : "Month"})
        </p>
        {yearly ? (
          <span className="font-bold text-Purplishblue text-2xl">
            ${TotalPrice}/yr
          </span>
        ) : (
          <span className="font-bold text-Purplishblue text-2xl">
            ${TotalPrice}/mo
          </span>
        )}
      </div>

      <div className="flex justify-between">
        <span
          className="text-Marineblue cursor-pointer my-auto "
          onClick={() => dispatch(backStep())}
        >
          Go Back
        </span>
        <button
          Confirm
          onClick={() => dispatch(nextStep(5))}
          className=" bg-Marineblue text-white px-1 py-2 rounded-lg w-1/4"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
