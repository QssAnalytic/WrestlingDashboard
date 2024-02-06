import Frames from "./components/frames/Frames";
import Filter from "./components/Filter/Filter";

function App() {
  // mx-auto flex flex-col justify-center items-center container
  return (
    <div className=" m-auto container">
      <div className="m-auto flex flex-col gap-3 justify-center items-center">
        <Filter />
        <Frames />
      </div>
    </div>
  );
}

export default App;
