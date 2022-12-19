import { FunctionComponent } from "react";
import Content from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plan from "./Plan";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

interface SelectPlanProps {}

const SelectPlan: FunctionComponent<SelectPlanProps> = () => {
  return (
    <>
      <Content
        header="Select Your Plan"
        description="you have the option of monthly or yearly billing"
      >
        <div className="flex flex-col gap-3">
          <Plan type="arcade" isActive={true} />
          <Plan type="advanced" isActive={false} />
          <Plan type="pro" isActive={false} />
          <div className="flex justify-center items-center gap-6 py-3 bg-pastel-blue bg-opacity-10 rounded-lg mt-3">
            <span>Monthly</span>
            <FontAwesomeIcon icon={faToggleOn} />
            <span>Yearly</span>
          </div>
        </div>
      </Content>
    </>
  );
};

export default SelectPlan;
