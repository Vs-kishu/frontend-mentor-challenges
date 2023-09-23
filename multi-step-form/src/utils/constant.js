import { plan1, plan2, plan3 } from "../../assets/index";
const sideOptions = [
  { step: 1, option: "YOUR INFO" },
  { step: 2, option: "SELECT PLAN" },
  { step: 3, option: "ADD-ONS" },
  { step: 4, option: "SUMMARY" },
];

const cards = [
  {
    img: plan1,
    type: "Arcade",
    Mprice: 9,
    Yprice: 90,
    free: 2,
  },
  {
    img: plan2,
    type: "Advanced",
    Mprice: 12,
    Yprice: 90,
    free: 2,
  },
  {
    img: plan3,
    type: "Pro",
    Mprice: 15,
    Yprice: 90,
    free: 2,
  },
];

const addOnsTypes = [
  {
    type: "Online Services",
    desc: "Access to Multiplayer games",
    Mprice: 1,
    Yprice: 10,
  },
  {
    type: "Larger Storage",
    desc: "Extra 1 TB of clud save",
    Mprice: 2,
    Yprice: 20,
  },
  {
    type: "Customizable Profile",
    desc: "Custom theme on your profile",
    Mprice: 2,
    Yprice: 20,
  },
];
export { sideOptions, cards, addOnsTypes };
