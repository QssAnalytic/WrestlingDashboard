import LineBar from "../../../../../../components/frames/left_Frame/bars/line/LineBar";
import { BiLoaderAlt } from "react-icons/bi";

const ScorecardMetrics = ({ data, isLoading }) => {
  return (
    <div className="bg-[#14151C] rounded">
      <h1 className="flex justify-center items-center font-rubik text-base font-bold rounded-t  bg-[#1c1d24] text-[#a87b41] p-2 ">
        Scorecard metrics
      </h1>

      <div className="py-2 h-60">
        {data ? data?.map((item, idx) => (
          <div className="flex-col text-sm font-rubik py-[6px] px-5" key={idx}>
            <div className="flex justify-between items-center text-xs tracking-wide pb-2">
              <p>{item.name}</p>
              <span className="text-sm">{item.avg}</span>
            </div>
            <LineBar percent={item.avg} />
          </div>
        )) :  isLoading ? (
          <div className="flex justify-center h-full items-center text-xs tracking-wide pb-2">
            <BiLoaderAlt className="animate-spin text-[20px]" />
          </div>
        ) : <p className="flex justify-center h-full items-center text-xs tracking-wide pb-2">No data</p>}
      </div>
    </div>
  );
};

export default ScorecardMetrics;
