import useSWR from "swr";
import LineBar from "../../../../../../components/frames/left_Frame/bars/line/LineBar";
import { leftFrameEndpoints } from "../../../../../../services/api/endpoints";
import { getData } from "../../../../../../services/api/requests";

const SummaryStats = ({ filterParams }) => {
  const { data: metrics } = useSWR(
    filterParams?.years && filterParams?.action_name_id && filterParams?.wrestler
      ? leftFrameEndpoints.metrics(filterParams?.years, filterParams?.wrestler, filterParams?.action_name_id)
      : null,
    getData,
  );

  return (
    <div className=" bg-[#14151C] rounded bg">
      <h1 className="flex justify-center items-center font-rubik text-base font-bold rounded-t  bg-[#1c1d24] text-[#a87b41] p-2">
        Summary stats
      </h1>
      <div className="py-2 h-60 overflow-scroll">
        {metrics ? (
          metrics.map((metric, idx) => (
            <div className="flex-col text-sm font-rubik py-[6px] px-5" key={idx}>
              <div className="flex justify-between items-center text-xs tracking-wide pb-2">
                <p>{metric.metrics}</p>
                <span className="text-sm">{metric.score}</span>
              </div>
              <LineBar percent={metric.score} />
            </div>
          ))
        ) : (
          <p className="flex justify-center h-full items-center text-xs tracking-wide pb-2">No data</p>
        )}
      </div>
    </div>
  );
};

export default SummaryStats;
