import Frames from "./components/frames/Frames";
import Filter from "./components/Filter/Filter";

function App() {
  // mx-auto flex flex-col justify-center items-center container
  return (
    <div className="container m-auto">
      <div className="container-inner flex flex-col gap-5">
        <Filter />
        <Frames />
      </div>
    </div>
  );
}

export default App;
