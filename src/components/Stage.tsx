import { FunctionComponent } from "react";
import StageItem from "./StageItem";
interface StageProps {}

const Stage: FunctionComponent<StageProps> = () => {
  return (
    <>
      <div className="flex flex-col bg-mobile sm:bg-desktop bg-cover bg-center bg-no-repeat w-full h-full sm:rounded-2xl">
        <div className="flex sm:flex-col gap-4 sm:gap-10 justify-center mt-9 sm:mt-14 sm:ml-11">
          <StageItem step={1} isActive={true} label="YOUR INFO" />
          <StageItem step={2} isActive={false} label="SELECT PLAN" />
          <StageItem step={3} isActive={false} label="ADD-ONS" />
          <StageItem step={4} isActive={false} label="SUMMARY" />
        </div>
      </div>
    </>
  );
};

export default Stage;
