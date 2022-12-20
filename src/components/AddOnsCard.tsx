import { FunctionComponent } from "react";
import icon from "../assets/images/icon-checkmark.svg";

interface AddonsCardProps {
  header: string;
  description: string;
  amount: string;
  isChecked: boolean;
}

const AddonsCard: FunctionComponent<AddonsCardProps> = ({
  header,
  description,
  amount,
  isChecked,
}) => {
  return (
    <>
      <div
        className={
          "flex justify-between items-center gap-4 sm:gap-5 p-3 sm:p-5 border rounded-md hover:cursor-pointer hover:border-marine-blue " +
          (isChecked
            ? "bg-purplish-blue bg-opacity-5 border-y-marine-blue"
            : "border-cool-gray")
        }
      >
        <div
          className={
            "flex justify-center items-center w-5 h-5 rounded text-white border  " +
            (isChecked ? "bg-purplish-blue" : "border-cool-gray")
          }
        >
          <img src={icon} alt="" className="w-3 h-3" />
        </div>
        <div className="flex flex-1 flex-col">
          <span className="text-marine-blue font-medium">{header}</span>
          <span className="text-cool-gray text-xs sm:text-base">
            {description}
          </span>
        </div>
        <span className="text-purplish-blue text-xs sm:text-base">
          {amount}
        </span>
      </div>
    </>
  );
};

export default AddonsCard;
