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
  },
});
//Action Creators
export const { changePlan } = slice.actions;
//Selectors
export const selectPlan = (state: RootState) => state.plan;
export default slice.reducer;
