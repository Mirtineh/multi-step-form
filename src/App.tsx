import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Stage from "./components/Stage";
function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:p-4 h-screen relative">
        <div className="basis-1/3 sm:basis-3/12">
          <Stage />
        </div>
        <div>
          <PersonalInfo />
        </div>
      </div>
    </>
  );
}

export default App;
