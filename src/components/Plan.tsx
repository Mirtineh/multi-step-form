import { FunctionComponent } from "react";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconPro from "../assets/images/icon-pro.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";

interface PlanProps {
  type: "arcade" | "advanced" | "pro";
  isActive: boolean;
}
type plan = {
  label: "Arcade" | "Advanced" | "pro";
};

const Plan: FunctionComponent<PlanProps> = ({ type, isActive }) => {
  const plans = {
    arcade: {
      label: "Arcade",
      icon: iconArcade,
    },
    advanced: {
      label: "Advanced",
      icon: iconAdvanced,
    },
    pro: {
      label: "Pro",
      icon: iconPro,
    },
  };
  const { label, icon } = plans[type];
  return (
    <div
      className={
        "flex gap-4 border rounded-md p-4 " +
        (isActive
          ? "border-marine-blue bg-purplish-blue bg-opacity-5"
          : "border-cool-gray")
      }
    >
      <img src={icon} alt="" />
      <div className="flex flex-col">
        <p className="text-marine-blue font-medium">{label}</p>
        <p className="text-cool-gray">$9/mo</p>
      </div>
    </div>
  );
};

export default Plan;
