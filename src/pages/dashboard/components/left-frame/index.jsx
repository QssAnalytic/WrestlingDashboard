import OveralScore from "./components/overal-score";
import ScoresByYears from "../../../../components/frames/left_Frame/scores_by_years/ScoresByYears";
import OffenceStatsByYears from "../../../../components/frames/left_Frame/offence_stats_by_years/OffenceStatsByYears";
import Select from "../../../../components/filter/components/select";
import useSWR from "swr";
import { leftFrameEndpoints } from "../../../../services/api/endpoints";
import { getData } from "../../../../services/api/requests";
import { useContext, useEffect } from "react";
import { FilterContext } from "../../../../context/FilterContext";
import SummaryStats from "./components/summary-stats";
import ScorecardMetrics from "./components/score-card-metrics";
import { MetricActions } from "../../../types";
import OverallScoreByYears from "./components/overal-score-by-years";
import { useTranslation } from "react-i18next";

const LeftFrame = () => {
  const { filterParams, setFilterParams, setFilterDialog, filterDialog } = useContext(FilterContext);
  const { t } = useTranslation();
  // Summary Stats and ScoreCard Metrics data fetching
  const { data: newMetrics, isLoading: metricsLoading } = useSWR(
    filterParams?.years?.length > 0 && filterParams?.wrestler && filterParams?.action_name
      ? leftFrameEndpoints.metrics(filterParams?.years, filterParams?.wrestler, filterParams?.action_name)
      : null,
    getData,
  );

  const { data: scoreCardMetrics, isLoading: statsLoading } = useSWR(
    filterParams?.years?.length > 0 && filterParams?.wrestler
      ? leftFrameEndpoints.stats(filterParams?.years, filterParams.wrestler)
      : null,
    getData,
  );

  const { data: metricsChart } = useSWR(
    filterParams?.metrics && filterParams?.wrestler
      ? leftFrameEndpoints.metricsChart(filterParams?.metrics, filterParams?.wrestler)
      : null,
    getData,
  );

  useEffect(()=>{
    console.log('filterparams', filterParams)
  },[filterParams?.country])

  const convertedStats = metricsChart?.stats_list?.map((item) => ({
    data: item,
  }));

  // Stats chart query

  // const { data: statsChart } = useSWR(
  //   filterParams?.wrestler && filterParams?.stats && filterParams?.metrics
  //     ? leftFrameEndpoints?.statsChart(filterParams?.stats, filterParams?.wrestler, filterParams?.metrics)
  //     : null,
  //   getData,
  // );

  return (
    <section className="h-[100%]">
      <h1 className="font-customweight leading-5 tracking-wider font-inter text-center  text-[#ECC254] pt-2 pb-4">
        {t(`Inside the ring: Tactical Evaluation`)}
      </h1>

      <div className="border border-[#ECC254] h-[100%] rounded flex p-4 gap-4">
        <div className="flex flex-col gap-2">
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
          <SummaryStats data={newMetrics?.metrics_list} isLoading={metricsLoading} />
        </div>

        <div className="flex flex-col gap-3">
          <ScoresByYears />
          <Select
            id={"metrics"}
            name={"Offence stats"}
            data={MetricActions}
            value={filterParams}
            setValue={setFilterParams}
            filterDialog={filterDialog}
            setFilterDialog={setFilterDialog}
          />
          <OverallScoreByYears data={metricsChart?.data} />
          <Select
            id={"stats"}
            name={"Offence stats"}
            data={convertedStats}
            value={filterParams}
            setValue={setFilterParams}
            filterDialog={filterDialog}
            setFilterDialog={setFilterDialog}
          />
          <OffenceStatsByYears />
        </div>
      </div>
    </section>
  );
};

export default LeftFrame;
