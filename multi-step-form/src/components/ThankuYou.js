import React from "react";
import { thanku } from "../../assets";
import { useDispatch } from "react-redux";
import { resetStore } from "../store/formSlice";

const ThankuYou = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div>
        <img src={thanku} alt="thanku" />
      </div>
      <h1>Thank you!</h1>
      <p className="text-center text-sm text-Coolgray w-3/4">
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <button
        type="button"
        onClick={() => dispatch(resetStore())}
        className=" bg-Marineblue text-white px-1 py-2 rounded-lg w-1/4"
      >
        Fill Again
      </button>
    </div>
  );
};

export default ThankuYou;
