import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

type planInterface = "arcade" | "advanced" | "pro";
type addOn = "online" | "larger" | "customizable";
interface planState {
  name: string;
  email: string;
  isMonthly: boolean;
  plan: planInterface;
  addons: addOn[];
}
const initialState: planState = {
  name: "",
  email: "",
  isMonthly: true,
  plan: "arcade",
  addons: [],
};
const slice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    changePlan: (state, action: PayloadAction<planInterface>) => {
      state.plan = action.payload;
    },
    toggleDuration: (state) => {
      state.isMonthly = !state.isMonthly;
    },
  },
});
//Action Creators
export const { changePlan, toggleDuration } = slice.actions;
//Selectors
export const selectPlan = (state: RootState) => state.plan;
export const selectIsMonthly = (state: RootState) => state.isMonthly;
export const planData = {
  arcade: { yearly: 90, monthly: 9 },
  advanced: { yearly: 120, monthly: 12 },
  pro: { yearly: 150, monthly: 15 },
};
//Reducer
export default slice.reducer;
