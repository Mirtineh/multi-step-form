import { FunctionComponent } from "react";
import Content from "./Content";
import iconArcade from "../assets/images/icon-arcade.svg";
import Plan from "./Plan";

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
          <div className="flex justify-center">
            <span>Monthly</span>
            <span>Yearly</span>
          </div>
        </div>
      </Content>
    </>
  );
};

export default SelectPlan;
