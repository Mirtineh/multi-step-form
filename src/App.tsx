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
          <div className="absolute sm:static w-72 h-full sm:w-[500px] mx-auto p-7  my-auto rounded-md -top-16 bg-white">
            <PersonalInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
