import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Stage from "./components/Stage";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Finished from "./components/Finished";
import { useState } from "react";
import SelectPlan from "./components/SelectPlan";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectPageIndex } from "./store/plans";
import Navigation from "./components/Navigation";
export type PlanInterface = "arcade" | "advanced" | "pro";
function App() {
  const pageIndex = useAppSelector(selectPageIndex);

  const pages = [
    <PersonalInfo />,
    <SelectPlan />,
    <AddOns />,
    <Summary />,
    <Finished />,
  ];
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-magnolia">
        <div className="flex flex-col sm:flex-row sm:p-4 sm:bg-white rounded-lg w-full h-full sm:w-[950px] sm:h-[620px] shadow-xl">
          <div className="basis-1/3 sm:basis-6/12">
            <Stage pageIndex={pageIndex} />
          </div>
          <div className="bg-magnolia sm:bg-white h-full w-full relative">
            <div className="flex flex-col justify-between items-center absolute sm:static w-full sm:w-[500px] h-auto sm:h-full -top-16 bottom-0 sm:justify-around mx-auto">
              <div className="w-[345px] sm:w-full h-fit  p-7 rounded-md bg-white shadow-xl sm:shadow-none">
                {pages[pageIndex]}
              </div>
              {pageIndex !== pages.length - 1 ? <Navigation /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
