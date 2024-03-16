import useSWR from "swr";
import { rightFrameEndpoints } from "../../../../../../services/api/endpoints";
import { getData } from "../../../../../../services/api/requests";
import { useContext } from "react";
import { FilterContext } from "../../../../../../context/FilterContext";
import DecisionLine from "./decision-line";
import { decisionTypes } from "../../../../../types";
import { useTranslation } from "react-i18next";

const Decisions = () => {
  const { filterParams } = useContext(FilterContext);
  const { t } = useTranslation();

  const { data: decisions } = useSWR(
    filterParams?.wrestler && filterParams?.years?.length > 0
      ? rightFrameEndpoints.decisions(filterParams.wrestler, filterParams.years)
      : null,
    getData,
  );

  const colors = [
    {
      bgColor: "#2B2D33",
      stopColor: ["#91DD56", "#429E2B"],
    },
    {
      bgColor: "#2B2D33",
      stopColor: ["#692C34", "#DE2736"],
    },
  ];

  return (
    <div className="decisions flex justify-center gap-4 px-5 py-3">
      {decisions &&
        Object.entries(decisions)?.map(([key, value], idx) => {
          console.log("color", colors?.[key]);
          return (
            <div className="rounded w-full">
              <h1
                className={`flex justify-center text-base font-bold rounded-t p-2 mb-5 bg-[#1c1d24] ${
                  key === decisionTypes.WinDecision ? "text-green-300" : "text-[#ED2939]"
                } `}>
                {key === decisionTypes.WinDecision ? t("Win Decisions") : t("Lose Decisions")}
              </h1>

              <div className="h-[250px] overflow-scroll no-scrollbar">
                {value?.map((item, i) => (
                  <div className="flex-col text-xs font-rubik" key={i}>
                    <div className="flex justify-between m-auto w-[300px]">
                      <span className="text-xs">{item?.decision.slice(3).toUpperCase()}</span>
                      <span>{item?.decision_count}</span>
                    </div>
                    <div className="flex justify-center my-3">
                      <DecisionLine percent={item?.decision_count} colors={idx === 0 ? colors?.[0] : colors[1]} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Decisions;
