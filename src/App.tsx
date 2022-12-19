import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Stage from "./components/Stage";
function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:p-4 h-screen">
        <div className="basis-1/3 sm:basis-3/12">
          <Stage />
        </div>
        <div className="bg-magnolia sm:bg-white h-full w-full relative">
          <div className="absolute sm:static w-full h-fit -top-16">
            <div className="w-[345px] h-fit sm:w-[500px] mx-auto p-7 sm:mt-10 rounded-md bg-white">
              <PersonalInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
