import OveralScore from "./components/overal-score";
import OffenceStats from "../../../../components/frames/left_Frame/offence_stats/OffenceStats";
import OverallScoreByYears from "../../../../components/frames/left_Frame/overall_score_by_years/OverallScoreByYears";
import ScoresByYears from "../../../../components/frames/left_Frame/scores_by_years/ScoresByYears";
import OffenceStatsByYears from "../../../../components/frames/left_Frame/offence_stats_by_years/OffenceStatsByYears";
import Select from "../../../../components/filter/components/select";
import useSWR from "swr";
import { leftFrameEndpoints } from "../../../../services/api/endpoints";
import { getData } from "../../../../services/api/requests";
import { useContext } from "react";
import { FilterContext } from "../../../../context/FilterContext";
import SummaryStats from "./components/summary-stats";
import ScorecardMetrics from "./components/score-card-metrics";
import { MetricActions } from "../../../types";

const LeftFrame = () => {
  const { filterParams, setFilterParams, setFilterDialog, filterDialog } = useContext(FilterContext);

  // Summary Stats and ScoreCard Metrics data fetching
  const { data: metrics, isLoading: metricsLoading } = useSWR(
    filterParams?.years?.length > 0 && filterParams?.wrestler
      ? leftFrameEndpoints.metrics(filterParams?.years, filterParams?.wrestler)
      : null,
    getData,
  );

  const { data: scoreCardMetrics, isLoading: statsLoading } = useSWR(
    filterParams?.years?.length > 0 && filterParams?.wrestler
      ? leftFrameEndpoints.stats(filterParams?.years, filterParams.wrestler)
      : null,
    getData,
  );

  const newMetrics = metrics?.filter((metric) => metric.name === filterParams?.action_name)?.[0]?.metrics_list;

  return (
    <section className="">
      <h1 className="font-customweight leading-5 tracking-wider font-inter text-center  text-[#ECC254] pt-2 pb-4">
        Inside the ring: Tactical Evaluation
      </h1>

      <div className="border border-[#ECC254] h-full rounded flex p-4 gap-4">
        <div className="flex flex-col justify-between">
          <OveralScore data={scoreCardMetrics} />
          <ScorecardMetrics data={scoreCardMetrics} isLoading={statsLoading} />
          <Select
            id={"action_name"}
            name={"Offence stats"}
            data={MetricActions}
            value={filterParams}
            setValue={setFilterParams}
            filterDialog={filterDialog}
            setFilterDialog={setFilterDialog}
          />
          <SummaryStats data={newMetrics} isLoading={metricsLoading} />
        </div>

        <div className="flex flex-col justify-between">
          <OverallScoreByYears />
          <OffenceStats />
          <ScoresByYears />
          <OffenceStatsByYears />
        </div>
      </div>
    </section>
  );
};

export default LeftFrame;
