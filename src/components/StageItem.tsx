import { FunctionComponent } from "react";

interface StageItemProps {
  isActive: boolean;
  label: string;
  step: number;
}

const StageItem: FunctionComponent<StageItemProps> = ({
  isActive,
  label,
  step,
}) => {
  return (
    <div className={"flex gap-4 justify-center sm:justify-start sm:ml-8 "}>
      <div
        className={
          "flex justify-center items-center w-8 h-8 sm:h-12 sm:w-12 rounded-full " +
          (isActive
            ? "text-marine-blue bg-light-blue"
            : "text-white border border-white ")
        }
      >
        {step}
      </div>

      <div className="sm:flex flex-col hidden sm:visible">
        <span className="text-cool-gray">STEP {step}</span>
        <span className="text-white font-bold">{label}</span>
      </div>
    </div>
  );
};

export default StageItem;
