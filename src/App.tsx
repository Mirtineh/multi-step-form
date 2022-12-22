import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Stage from "./components/Stage";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Finished from "./components/Finished";
import { useState } from "react";
import SelectPlan from "./components/SelectPlan";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectUser, setErrors } from "./store/plans";
import { UserSchema } from "./validation";
import { fromZodError } from "zod-validation-error";
export type PlanInterface = "arcade" | "advanced" | "pro";
function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const pages = [
    <PersonalInfo />,
    <SelectPlan />,
    <AddOns />,
    <Summary />,
    <Finished />,
  ];
  const validate = () => {
    const results = UserSchema.safeParse(user);
    if (!results.success) {
      dispatch(setErrors(results.error.flatten()));
      return false;
    }
    return true;
  };
  const handleNext = () => {
    if (pageIndex === 0) {
      if (validate()) setPageIndex((prev) => prev + 1);
    } else {
      setPageIndex((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:p-4 h-screen">
        <div className="basis-1/3 sm:basis-3/12">
          <Stage pageIndex={pageIndex} />
        </div>
        <div className="bg-magnolia sm:bg-white h-full w-full relative">
          <div className="flex flex-col justify-between items-center absolute sm:static w-full sm:w-[500px] h-auto sm:h-full -top-16 bottom-0 sm:justify-around mx-auto">
            <div className="w-[345px] sm:w-full h-fit  p-7 rounded-md bg-white shadow-xl sm:shadow-none">
              {pages[pageIndex]}
            </div>
            {pageIndex !== pages.length - 1 ? (
              <div className="flex justify-between w-full px-4 py-6 bg-white">
                <button
                  className={
                    "text-cool-gray hover:text-marine-blue " +
                    (pageIndex === 0 ? "invisible" : "")
                  }
                  onClick={() => setPageIndex((prev) => prev - 1)}
                >
                  Go Back
                </button>
                <button
                  className="bg-marine-blue text-white py-2 sm:py-3 px-4 sm:px-5 rounded-md hover:bg-purplish-blue hover:cursor-pointer"
                  onClick={handleNext}
                >
                  {pageIndex === 3 ? "Confirm" : "Next Step"}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
