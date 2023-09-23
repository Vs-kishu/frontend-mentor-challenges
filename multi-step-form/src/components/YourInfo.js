import React from "react";
import { ValidInput } from "../utils/helper";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addYourInfo, nextStep } from "../store/formSlice";
import { toast } from "react-toastify";

const YourInfo = () => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const handleNext = () => {
    const data = getValues();
    if (!isValid) {
      trigger();
      toast.error("!fill details");
      return;
    } else {
      dispatch(addYourInfo(data));
      dispatch(nextStep(2));
    }
  };

  return (
    <div className="flex flex-col justify-around w-full">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Personal info</h1>
        <p className="text-Coolgray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="flex flex-col gap-5 h-1/2 justify-center">
        <ValidInput props={{ label: "Name", register, errors, getValues }} />
        <ValidInput
          props={{
            label: "Email Address",
            register,
            errors,
            getValues,
          }}
        />
        <ValidInput
          props={{
            label: "Phone Number",
            register,
            errors,
            getValues,
          }}
        />
      </form>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className=" bg-Marineblue text-white px-1 py-2 rounded-lg w-32"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default YourInfo;
