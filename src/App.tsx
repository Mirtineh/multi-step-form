import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Stage from "./components/Stage";
import AddOns from "./components/AddOns";
function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:p-4 h-screen">
        <div className="basis-1/3 sm:basis-3/12">
          <Stage />
        </div>
        <div className="bg-magnolia sm:bg-white h-full w-full relative">
          <div className="flex flex-col justify-between items-center absolute sm:static w-full sm:w-[500px] h-auto sm:h-full -top-16 bottom-0 sm:justify-around mx-auto">
            <div className="w-[345px] sm:w-full h-fit  p-7 rounded-md bg-white">
              {/* <PersonalInfo /> */}
              {/* <SelectPlan /> */}
              <AddOns />
            </div>
            <div className="flex justify-between w-full px-4 py-6 bg-white">
              <button className="text-cool-gray hover:text-marine-blue">
                Go Back
              </button>
              <button className="bg-marine-blue text-white py-2 sm:py-3 px-4 sm:px-5 rounded-md hover:bg-purplish-blue hover:cursor-pointer">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
