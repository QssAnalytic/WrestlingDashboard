import Silver from "/img/medals/silver.svg";
import Gold from "/img/medals/gold.svg";
import Bronze from "/img/medals/bronz.svg";
import useSWR from "swr";
import { useContext } from "react";
import { FilterContext } from "../../../../../../context/FilterContext";
import { getData } from "../../../../../../services/api/requests";
import { rightFrameEndpoints } from "../../../../../../services/api/endpoints";
import { MedalTypes, PlaceTypes } from "../../../../../types";

const Medals = () => {
  const { filterParams } = useContext(FilterContext);

  const { data: medals } = useSWR(
    filterParams?.wrestler && filterParams?.years
      ? rightFrameEndpoints.medals(filterParams.wrestler, filterParams.years)
      : null,
    getData,
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${month}/${year}`;
  };

  return (
    <div className="w-[340px]">
      <div className=" w-full bg-[#14151C] rounded ">
        <h1 className="flex justify-center items-center font-rubik text-base font-bold rounded-t  p-2 bg-[#1c1d24]  text-[#517B38]">
          Medals
        </h1>

        {/* Object divided into 2 parts due to object structure. Belowing part belongs to medals counts */}
        <div className="px-2 py-2 gap-x-8">
          <div className="flex justify-between">
            {medals &&
              Object.entries(
                Object.keys(medals)
                  .slice(0, 3)
                  .reduce((result, key) => {
                    result[key] = medals[key];
                    return result;
                  }, {}),
              ).map(([key, value]) => (
                <div className="flex justify-between gap-6">
                  <div className="flex flex-col items-center justify-center ">
                    <p
                      className={`text-${
                        key === MedalTypes.Gold ? "[#FCC417]" : key === MedalTypes.Silver ? "[#CECDD2]" : "[#F79429]"
                      } pb-1`}>
                      {key}
                    </p>
                    <div className="flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto py-3 px-1">
                      <img
                        src={key === MedalTypes.Gold ? Gold : key === MedalTypes.Silver ? Silver : Bronze}
                        alt="medal"
                        className="w-8"
                      />
                      <span className="border border-[#2B2D33] rounded bg-[#121319] mx-auto  px-2">{value}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other parts of object which consists of gold_place, bronze_place and etc. have been mapped at the below */}
          <div className=" h-36 sa  border border-[#2B2D33] rounded  bg-[#121319] mt-4 mx-auto overflow-y-auto">
            {medals &&
              Object.entries(
                Object.keys(medals)
                  .slice(3, 6)
                  .reduce((result, key) => {
                    result[key] = medals[key];
                    return result;
                  }, {}),
              ).map(([key, value]) => (
                <div className="flex h-16">
                  <div
                    className={`w-2/6 border border-[#2B2D33] ${
                      key === PlaceTypes.GoldPlace
                        ? "text-[#FCC417]"
                        : key === PlaceTypes.SilverPlace
                        ? "text-[#CECDD2]"
                        : "text-[#F79429]"
                    }  flex items-center justify-center`}>
                    {key === PlaceTypes.GoldPlace ? "Gold" : key === PlaceTypes.SilverPlace ? "Silver" : "Bronze"}
                  </div>
                  <div className="w-4/6 border border-[#2B2D33] text-[#88898C]  flex items-center flex-col justify-center ">
                    {value.length > 0 ? (
                      value?.map((item, idx) => {
                        const formattedDate = formatDate(item.fight_date);
                        return (
                          <div
                            className="flex items-center justify-between px-5 text-center hover:scale-100 hover:z-10 hover:truncate w-full py-1 gap-4"
                            key={idx}>
                            <p className="text-sm">{formattedDate}</p>
                            <p className="text-sm truncate-none truncate">{item?.location}</p>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-[#8F9093] font-rubik text-sm">
                        No{" "}
                        {key === PlaceTypes.GoldPlace ? "gold" : key === PlaceTypes.SilverPlace ? "silver" : "bronze"}{" "}
                        medals
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medals;
