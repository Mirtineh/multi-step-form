import { FunctionComponent } from "react";
import StageItem from "./StageItem";
interface StageProps {
  pageIndex: number;
}

const Stage: FunctionComponent<StageProps> = ({ pageIndex }) => {
  return (
    <>
      <div className="flex flex-col bg-mobile sm:bg-desktop bg-cover bg-center bg-no-repeat w-full h-full sm:rounded-2xl">
        <div className="flex sm:flex-col gap-4 sm:gap-6 justify-center mt-9 sm:mt-11 sm:ml-8">
          <StageItem step={1} isActive={pageIndex === 0} label="YOUR INFO" />
          <StageItem step={2} isActive={pageIndex === 1} label="SELECT PLAN" />
          <StageItem step={3} isActive={pageIndex === 2} label="ADD-ONS" />
          <StageItem
            step={4}
            isActive={pageIndex === 3 || pageIndex === 4}
            label="SUMMARY"
          />
        </div>
      </div>
    </>
  );
};

export default Stage;
