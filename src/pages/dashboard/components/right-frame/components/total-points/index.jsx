import Points from "./components/points";
import { FilterContext } from "../../../../../../context/FilterContext";
import useSWR from "swr";
import { useContext } from "react";
import { getData } from "../../../../../../services/api/requests";
import { rightFrameEndpoints } from "../../../../../../services/api/endpoints";
import { useTranslation } from "react-i18next";

export default function TotalPoints() {
  const { filterParams } = useContext(FilterContext);
  const { t } = useTranslation();

  const { data: totalPoints } = useSWR(
    filterParams?.wrestler && filterParams?.years?.length > 0
      ? rightFrameEndpoints.points(filterParams?.wrestler, filterParams?.years)
      : null,
    getData,
  );

  return (
    <section className="">
      <h1 className="flex justify-center items-center text-base font-bold rounded-t p-2 bg-[#1c1d24] text-[#517B38]">
        {t(`Total (gained & skipped) points`)}
      </h1>
      <div className="POINTS flex  mx-auto items-center justify-center gap-4 mt-5 px-5">
        {totalPoints && Object.entries(totalPoints).map(([key, value]) => <Points points={value?.[0]} mainKey={key} />)}
      </div>
    </section>
  );
}
