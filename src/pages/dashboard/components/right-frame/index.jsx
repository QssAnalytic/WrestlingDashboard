import Medals from "../../../../components/frames/right_Frame/medals/Medals";
import Scores from "../../../../components/frames/right_Frame/scores/Scores";
import TotalPoints from "../../../../components/frames/right_Frame/total_points/TotalPoints";
import Decisions from "../right-frame/components/decisions";

const RightFrame = () => {

    
  return (
    <section className=" text-center ">
      <h1 className="font-customweight leading-5 tracking-wider font-inter text-center text-[#83D24F] pt-2 pb-4">
        Career Summary
      </h1>

      <div className=" border border-[#83D24F] h-full rounded flex flex-col p-4 gap-3  ">
        <div className=" flex gap-4 ">
          <Scores />
          <Medals />
        </div>

        <div className="bg-[#14151C] rounded mt-1 h-full ">
          <TotalPoints />
          <Decisions />
        </div>
      </div>
    </section>
  );
};

export default RightFrame;
