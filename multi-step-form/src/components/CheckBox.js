import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addons } from "../store/formSlice";

const CheckBox = ({ item }) => {
  const dispatch = useDispatch();
  const { type, desc, Mprice, Yprice } = item;
  const { yearly } = useSelector((store) => store.form);
  const handleChange = () => {
    if (!yearly) {
      dispatch(addons({ Mprice, type }));
    } else {
      dispatch(addons({ Yprice, type }));
    }
  };

  return (
    <label
      htmlFor={type}
      className="flex items-center justify-between border accent-Purplishblue border-Purplishblue py-4 px-3 rounded-lg"
    >
      <input
        type="checkbox"
        className="w-6 h-6"
        id={type}
        onChange={handleChange}
      />
      <div className="w-full pl-4">
        <span>{type} </span>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
      {yearly ? (
        <span className="text-Purplishblue font-extralight">${Yprice}/yr</span>
      ) : (
        <span className="text-Purplishblue font-extralight">${Mprice}/m</span>
      )}
    </label>
  );
};

export default CheckBox;
