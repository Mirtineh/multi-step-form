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
          "flex justify-between items-center p-3 border rounded-md hover:cursor-pointer hover:border-marine-blue " +
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
        <div className="flex flex-col">
          <span className="text-marine-blue font-medium">{header}</span>
          <span className="text-cool-gray text-xs">{description}</span>
        </div>
        <span className="text-purplish-blue text-xs">{amount}</span>
      </div>
    </>
  );
};

export default AddonsCard;
