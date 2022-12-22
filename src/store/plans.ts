import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

export type planInterface = "arcade" | "advanced" | "pro";
export type addOnInterface = "online" | "larger" | "customizable";
interface userState {
  name: string;
  email: string;
  phone: string;
  isMonthly: boolean;
  plan: planInterface;
  addons: addOnInterface[];
}
const initialState: userState = {
  name: "",
  email: "",
  phone: "",
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
    modifyAddon: (state, action: PayloadAction<addOnInterface>) => {
      const index = state.addons.indexOf(action.payload);
      if (index !== -1) {
        state.addons.splice(index, 1);
      } else {
        state.addons.push(action.payload);
      }
    },
    modifyName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    modifyEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    modifyPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    toggleDuration: (state) => {
      state.isMonthly = !state.isMonthly;
    },
  },
});
//Action Creators
export const {
  changePlan,
  toggleDuration,
  modifyAddon,
  modifyName,
  modifyEmail,
  modifyPhone,
} = slice.actions;
//Selectors
export const selectPlan = (state: RootState) => state.plan;
export const selectUser = (state: RootState) => {
  const { name, email, phone } = state;
  return { name, email, phone };
};
export const selectIsMonthly = (state: RootState) => state.isMonthly;
export const selectAddOns = (state: RootState) => state.addons;
export const planData = {
  arcade: { yearly: 90, monthly: 9, label: "Arcade" },
  advanced: { yearly: 120, monthly: 12, label: "Advanced" },
  pro: { yearly: 150, monthly: 15, label: "Pro" },
};
export const addOnData = {
  online: { yearly: 10, monthly: 1, label: "Online service" },
  larger: { yearly: 20, monthly: 2, label: "Larger storage" },
  customizable: { yearly: 20, monthly: 2, label: "Customizable profile" },
};
//Reducer
export default slice.reducer;
