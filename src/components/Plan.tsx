import { FunctionComponent } from "react";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconPro from "../assets/images/icon-pro.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import { PlanInterface } from "../App";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  changePlan,
  planData,
  selectIsMonthly,
  selectPlan,
} from "../store/plans";

interface PlanProps {
  type: PlanInterface;
}

const Plan: FunctionComponent<PlanProps> = ({ type }) => {
  const plan = useAppSelector(selectPlan);
  const isMonthly = useAppSelector(selectIsMonthly);
  const dispatch = useAppDispatch();
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
        "flex sm:flex-col gap-4 sm:gap-10 border rounded-md p-4 hover:cursor-pointer hover:border-marine-blue " +
        (type === plan
          ? "border-marine-blue bg-purplish-blue bg-opacity-5"
          : "border-cool-gray")
      }
      onClick={() => dispatch(changePlan(type))}
    >
      <img src={icon} alt="" className="w-10" />
      <div className="flex flex-col">
        <p className="text-marine-blue font-medium">{label}</p>
        <p className="text-cool-gray">
          {isMonthly
            ? `$${planData[type].monthly}/mo`
            : `$${planData[type].yearly}/yr`}
        </p>
        {!isMonthly ? (
          <p className="text-marine-blue text-sm">2 months free</p>
        ) : null}
      </div>
    </div>
  );
};

export default Plan;
