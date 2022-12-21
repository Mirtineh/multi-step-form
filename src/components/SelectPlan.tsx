import { FunctionComponent, useState } from "react";
import Content from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plan from "./Plan";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { PlanInterface } from "../App";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectIsMonthly, toggleDuration } from "../store/plans";

interface SelectPlanProps {}

const SelectPlan: FunctionComponent<SelectPlanProps> = ({}) => {
  const isMonthly = useAppSelector(selectIsMonthly);
  const dispatch = useAppDispatch();
  return (
    <>
      <Content
        header="Select Your Plan"
        description="you have the option of monthly or yearly billing"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
          <Plan type="arcade" />
          <Plan type="advanced" />
          <Plan type="pro" />
          <div className="sm:col-span-3 flex justify-center items-center gap-6 py-3 bg-pastel-blue bg-opacity-10 rounded-lg mt-3">
            <span className={isMonthly ? "text-marine-blue" : "text-cool-gray"}>
              Monthly
            </span>
            {isMonthly ? (
              <FontAwesomeIcon
                icon={faToggleOn}
                className="hover:cursor-pointer"
                size="2x"
                flip="horizontal"
                onClick={() => dispatch(toggleDuration())}
              />
            ) : (
              <FontAwesomeIcon
                icon={faToggleOn}
                className="hover:cursor-pointer"
                size="2x"
                onClick={() => dispatch(toggleDuration())}
              />
            )}
            <span className={isMonthly ? "text-cool-gray" : "text-marine-blue"}>
              Yearly
            </span>
          </div>
        </div>
      </Content>
    </>
  );
};

export default SelectPlan;
