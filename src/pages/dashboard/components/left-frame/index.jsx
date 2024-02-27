import OveralScore from "../../../../components/frames/left_Frame/overal_score/OveralScore";
import ScorecardMetrics from "../../../../components/frames/left_Frame/scorecard_metrics/ScorecardMetrics";
import OffenceStats from "../../../../components/frames/left_Frame/offence_stats/OffenceStats";
import OverallScoreByYears from "../../../../components/frames/left_Frame/overall_score_by_years/OverallScoreByYears";
import ScoresByYears from "../../../../components/frames/left_Frame/scores_by_years/ScoresByYears";
import OffenceStatsByYears from "../../../../components/frames/left_Frame/offence_stats_by_years/OffenceStatsByYears";
import Select from "../../../../components/filter/components/select";
import useSWR from "swr";
import { filterEndpoints } from "../../../../services/api/endpoints";
import { getData } from "../../../../services/api/requests";
import { useContext } from "react";
import { FilterContext } from "../../../../context/FilterContext";
import SummaryStats from "./components/summary-stats";

const LeftFrame = () => {
  const { filterParams, setFilterParams, setFilterDialog, filterDialog } = useContext(FilterContext);

  const { data: offenceStats } = useSWR(filterEndpoints.metricsActions, getData);
  console.log("offence Stats", offenceStats);

  return (
    <section className="">
      <h1 className="font-customweight leading-5 tracking-wider font-inter text-center  text-[#ECC254] pt-2 pb-4">
        Inside the ring: Tactical Evaluation
      </h1>

      <div className="border border-[#ECC254] h-full rounded flex p-4 gap-4">
        <div className="flex flex-col justify-between">
          <OveralScore />
          <ScorecardMetrics />
          <Select
            id={"action_name_id"}
            name={"Offence stats"}
            data={offenceStats}
            value={filterParams}
            setValue={setFilterParams}
            filterDialog={filterDialog}
            setFilterDialog={setFilterDialog}
          />
          <SummaryStats filterParams={filterParams} />
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
