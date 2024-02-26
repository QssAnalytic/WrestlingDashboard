import Filter from "../../components/filter";
import Frames from "../../components/frames/Frames";

export default function Dashboard() {
  return (
    <div className="m-auto flex flex-col gap-3 justify-center items-center">
      <Filter />
      <Frames />
    </div>
  );
}
