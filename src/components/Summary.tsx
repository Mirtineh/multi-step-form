import { FunctionComponent } from "react";
import Content from "./Content";

interface SummaryProps {}

const Summary: FunctionComponent<SummaryProps> = () => {
  return (
    <Content
      header="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="flex flex-col gap-3 p-4 sm:p-6  bg-light-blue bg-opacity-10 rounded-md text-cool-gray text-sm sm:text-base">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-marine-blue font-medium">
              Arcade (Monthly)
            </span>
            <button className="text-cool-gray underline text-left w-fit hover:text-purplish-blue">
              Change
            </button>
          </div>
          <span className="text-marine-blue font-medium sm:text-lg">
            $90/mo
          </span>
        </div>
        <hr className="border-light-gray" />
        <div className="flex justify-between">
          <p>Online service</p>
          <span className="text-marine-blue">+$1/mo</span>
        </div>
      </div>
      <div className="flex justify-between p-4 sm:p-6">
        <p className="text-cool-gray text-sm sm:text-base">Total (per month)</p>
        <span className="text-purplish-blue font-bold sm:text-xl">
          +$120/mo
        </span>
      </div>
    </Content>
  );
};

export default Summary;
