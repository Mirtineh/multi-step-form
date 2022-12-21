import { FunctionComponent } from "react";
import { useAppSelector } from "../store/hooks";
import {
  addOnData,
  planData,
  selectAddOns,
  selectIsMonthly,
  selectPlan,
} from "../store/plans";
import Content from "./Content";

interface SummaryProps {}

const Summary: FunctionComponent<SummaryProps> = () => {
  const plan = useAppSelector(selectPlan);
  const isMonthly = useAppSelector(selectIsMonthly);
  const addOns = useAppSelector(selectAddOns);
  const getTotal = (type: "monthly" | "yearly") => {
    let total = 0;
    total += planData[plan][type];
    addOns.forEach((item) => {
      total += addOnData[item][type];
    });
    return total;
  };
  return (
    <Content
      header="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="flex flex-col gap-3 p-4 sm:p-6  bg-light-blue bg-opacity-10 rounded-md text-cool-gray text-sm sm:text-base">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-marine-blue font-medium">
              {planData[plan].label} ({isMonthly ? "Monthly" : "Yearly"})
            </span>
            <button className="text-cool-gray underline text-left w-fit hover:text-purplish-blue">
              Change
            </button>
          </div>
          <span className="text-marine-blue font-medium sm:text-lg">
            {isMonthly
              ? `$${planData[plan].monthly}/mo`
              : `$${planData[plan].yearly}/yr`}
          </span>
        </div>
        <hr className="border-light-gray" />
        {addOns.map((item) => (
          <div className="flex justify-between">
            <p>{addOnData[item].label}</p>
            <span className="text-marine-blue">
              {isMonthly
                ? `$${addOnData[item].monthly}/mo`
                : `$${addOnData[item].yearly}/yr`}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between p-4 sm:p-6">
        <p className="text-cool-gray text-sm sm:text-base">
          Total (per {isMonthly ? "month" : "year"})
        </p>
        <span className="text-purplish-blue font-bold sm:text-xl">
          {isMonthly
            ? `$${getTotal("monthly")}/mo`
            : `$${getTotal("yearly")}/yr`}
        </span>
      </div>
    </Content>
  );
};

export default Summary;
