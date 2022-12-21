import { FunctionComponent, useState } from "react";
import Content from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plan from "./Plan";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

interface SelectPlanProps {
  isMonthly: boolean;
  onDurationChange: () => void;
}

const SelectPlan: FunctionComponent<SelectPlanProps> = ({
  isMonthly,
  onDurationChange,
}) => {
  return (
    <>
      <Content
        header="Select Your Plan"
        description="you have the option of monthly or yearly billing"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
          <Plan type="arcade" isActive={true} />
          <Plan type="advanced" isActive={false} />
          <Plan type="pro" isActive={false} />
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
                onClick={() => onDurationChange()}
              />
            ) : (
              <FontAwesomeIcon
                icon={faToggleOn}
                className="hover:cursor-pointer"
                size="2x"
                onClick={() => onDurationChange()}
              />
            )}
            <span
              className={isMonthly ? "text-cool-gray" : "text-marine-blue"}
              onClick={() => onDurationChange()}
            >
              Yearly
            </span>
          </div>
        </div>
      </Content>
    </>
  );
};

export default SelectPlan;
