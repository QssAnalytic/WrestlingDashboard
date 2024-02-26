import { PointTypes } from "../../../../../types";
import Points from "./components/points";
import { FilterContext } from "../../../../../../context/FilterContext";
import useSWR from "swr";
import { useContext } from "react";
import { getData } from "../../../../../../services/api/requests";
import { rightFrameEndpoints } from "../../../../../../services/api/endpoints";

export default function TotalPoints() {
  const { filterParams } = useContext(FilterContext)

  const { data: totalPoints } = useSWR(
      filterParams?.wrestler && filterParams?.years ? rightFrameEndpoints.points(filterParams.wrestler, filterParams.years) : null,
      getData,
  );


  return (
    <section className="">
      <h1 className="flex justify-center items-center font-rubik text-base font-bold rounded-t p-2 bg-[#1c1d24] text-[#517B38]">
        Total (gained & skipped) points
      </h1>
      <div className="POINTS flex  mx-auto items-center justify-center gap-4 my-5 px-5">
        {totalPoints && Object.entries(totalPoints).map(([key, value]) => (
          <Points points={value?.[0]} mainKey={key}/>
        ))}
      </div>
    </section>
  );
}
