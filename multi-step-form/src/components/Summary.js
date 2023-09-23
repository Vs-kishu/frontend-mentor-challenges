import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "../store/formSlice";
import { toast } from "react-toastify";

const Summary = () => {
  const dispatch = useDispatch();
  const { yearly, plan, addOns } = useSelector((store) => store.form);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // Declare totalAddons outside of the forEach loop.
    let totalAddons = 0;

    if (yearly) {
      addOns.forEach((element) => {
        totalAddons += element.Yprice; // Accumulate the Yprice values.
      });
      setTotalPrice(totalAddons + plan.Yprice);
    } else {
      addOns.forEach((element) => {
        totalAddons += element.Mprice; // Accumulate the Mprice values.
      });
      setTotalPrice(totalAddons + plan.Mprice);
    }
  }, []);
  const handleSubmit = () => {
    dispatch(nextStep(5));
    toast.success("submitted succesfully");
  };

  return (
    <div className="flex flex-col justify-around w-full max-sm: space-y-2">
      <div className="space-y-2">
        <h1 className="text-xl sm:text-3xl font-semibold">Finishing up</h1>
        <p className="text-Coolgray max-sm:text-xs">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-Magnolia">
        <div className="flex justify-between items-center sm:px-6  py-2 sm:py-5">
          <div className="font-semibold text-Marineblue ">
            <p className="text-sm sm:text-lg ">
              {plan.type}
              <span>({yearly ? "Yearly" : "Monthly"})</span>
            </p>
            <span
              className="underline text-sm sm:text-lg font-medium text-Coolgray"
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
          {addOns?.map((item) => (
            <div
              key={`addons${item}`}
              className="flex justify-between px-5 py-5  "
            >
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
      <div className="flex text-sm sm:text-xl justify-between sm:px-6 ">
        <p className="text-Coolgray">
          Totalyear(per {yearly ? "Year" : "Month"})
        </p>
        {yearly ? (
          <span className="font-bold text-Purplishblue text-lg sm:text-2xl">
            ${totalPrice}/yr
          </span>
        ) : (
          <span className="font-bold text-Purplishblue text-lg sm:text-2xl">
            ${totalPrice}/mo
          </span>
        )}
      </div>

      <div className=" flex justify-between">
        <span
          className="text-Marineblue cursor-pointer my-auto "
          onClick={() => dispatch(backStep())}
        >
          Go Back
        </span>
        <button
          onClick={handleSubmit}
          className=" bg-Marineblue text-white px-1 py-2 rounded-lg w-32"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
