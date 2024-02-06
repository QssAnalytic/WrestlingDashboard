import Medals from "./medals/Medals";
import Scores from "./scores/Scores";
import TotalPoints from "./total_points/TotalPoints";
import Decisions from "./decisions/Decisions";

const RightFrame = () => {
  return (
    <section className=" text-center ">
      <h1 className="font-customweight leading-5 tracking-wider font-inter text-center text-[#83D24F] pt-2 pb-4">Career Summary</h1>

      <div className=" border border-[#83D24F] h-full rounded flex flex-col p-4 gap-3  ">
        <div className=" flex gap-4 ">
          <Scores />
          <Medals />
        </div>

        <div className="bg-[#14151C] rounded mt-1 ">
          <TotalPoints />
          <Decisions />
        </div>
      </div>
    </section>
  );
};

export default RightFrame;
