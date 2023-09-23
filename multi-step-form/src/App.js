import React from "react";
import Sidebar from "./components/Sidebar";
import YourInfo from "./components/YourInfo";
import { SelectPlan } from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import { useSelector } from "react-redux";
import ThankuYou from "./components/ThankuYou";

const App = () => {
  const { step } = useSelector((store) => store.form);
  return (
    <section className="flex justify-center items-center h-screen bg-Lightblue">
      <div className=" justify-between max-md:h-full w-full md:w-[850px] bg-White rounded-xl p-4 flex  ">
        <Sidebar />
        <div className="w-7/12 flex justify-between ">
          {step === 1 && <YourInfo />}
          {step === 2 && <SelectPlan />}
          {step === 3 && <AddOns />}
          {step === 4 && <Summary />}
          {step === 5 && <ThankuYou />}
        </div>
      </div>
    </section>
  );
};

export default App;
