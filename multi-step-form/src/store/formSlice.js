import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step: 1,
  yourInfo: null,
  plan: null,
  yearly: false,
  addOns: [],
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addYourInfo: (state, action) => {
      state.yourInfo = action.payload;
    },
    selectPlan: (state, action) => {
      state.plan = action.payload;
    },
    timePeriod: (state) => {
      state.yearly = !state.yearly;
    },
    addons: (state, action) => {
      const { type } = action.payload;
      const index = state.addOns.findIndex((obj) => obj.type === type);
      if (index !== -1) {
        state.addOns.splice(index, 1); // Remove the object at the found index
      } else {
        state.addOns.push(action.payload);
      }
    },
    nextStep: (state, action) => {
      state.step = action.payload;
    },
    backStep: (state) => {
      state.step--;
    },
    resetStore: () => initialState,
  },
});

export const {
  addYourInfo,
  nextStep,
  backStep,
  selectPlan,
  timePeriod,
  addons,
  resetStore,
} = formSlice.actions;

export default formSlice.reducer;
