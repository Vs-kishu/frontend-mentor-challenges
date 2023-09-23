import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addons } from "../store/formSlice";

const CheckBox = ({ item }) => {
  const dispatch = useDispatch();
  const { type, desc, Mprice, Yprice } = item;
  const { addOns } = useSelector((store) => store.form);
  const { yearly } = useSelector((store) => store.form);
  const handleChange = () => {
    if (!yearly) {
      dispatch(addons({ Mprice, type }));
    } else {
      dispatch(addons({ Yprice, type }));
    }
  };
  useEffect(() => {}, []);
  const isAddOn = addOns?.find((el) => {
    if (el.type === type) {
      return el;
    }
    return false;
  });

  return (
    <label
      htmlFor={type}
      className={`flex ${
        isAddOn?.type === type ? "bg-Magnolia" : ""
      } items-center justify-between border accent-Purplishblue border-Purplishblue sm:py-4 sm:px-3 rounded-lg`}
    >
      <input
        type="checkbox"
        className="w-6 h-6"
        checked={isAddOn?.type === type}
        id={type}
        onChange={handleChange}
      />
      <div className="w-full pl-2 sm:pl-4">
        <span>{type} </span>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
      {yearly ? (
        <span className="text-Purplishblue font-extralight whitespace-nowrap">
          ${Yprice}/yr
        </span>
      ) : (
        <span className="text-Purplishblue font-extralight whitespace-nowrap">
          ${Mprice}/m
        </span>
      )}
    </label>
  );
};

export default CheckBox;
