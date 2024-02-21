import Silver from "/img/medals/silver.svg";
import Gold from "/img/medals/gold.svg";
import Bronze from "/img/medals/bronz.svg";
import useSWR from "swr";
import { useContext } from "react";
import { FilterContext } from "../../../../context/FilterContext";
import { getData } from "../../../../services/api/requests";
import { rightFrameEndpoints } from "../../../../services/api/endpoints";

const Medals = () => {
  const { filterParams } = useContext(FilterContext);

  const { data: medals } = useSWR(
    filterParams?.wrestler && filterParams?.years
      ? rightFrameEndpoints.medals(filterParams.wrestler, filterParams.years)
      : null,
    getData,
  );

  const Data = [
    {
      id: 1,
      type: "Gold",
      image: Gold,
      count: medals?.Gold,
    },
    {
      id: 2,
      type: "Silver",
      image: Silver,
      count: medals?.Silver,
    },
    {
      id: 3,
      type: "Bronze",
      image: Bronze,
      count: medals?.Bronze,
    },
  ];

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

        <div className="px-2 py-2 gap-x-8">
          <div className="flex justify-between gap-6  ">
            {Data.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center justify-center ">
                  <p
                    className={`text-${
                      item.type === "Gold" ? "[#FCC417]" : item.type === "Silver" ? "[#CECDD2]" : "[#F79429]"
                    } pb-1`}>
                    {item.type}
                  </p>
                  <div className="flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto py-3 px-1">
                    <img src={item.image} alt="" className="w-8" />
                    <span className="border border-[#2B2D33] rounded bg-[#121319] mx-auto  px-2">{item.count}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" h-36 sa  border border-[#2B2D33] rounded  bg-[#121319] mt-4 mx-auto overflow-y-auto">
            <div className="flex h-16">
              <div className="w-2/6 border border-[#2B2D33] text-[#FCC417] flex items-center justify-center">
                {/* {item?.stage} */}Gold
              </div>
              <div className="w-4/6 border border-[#2B2D33] text-[#88898C]  flex items-center flex-col justify-center ">
                {medals?.gold_place?.length > 0 ? (
                  medals?.gold_place?.map((item, i) => {
                    const formattedDate = formatDate(item.fight_date);
                    return (
                      <div className="flex items-center justify-between px-5 text-center hover:scale-100 hover:z-10 hover:truncate w-full py-1 gap-4" key={i}>
                        <p className="text-sm">{formattedDate}</p>
                        <p className="text-sm truncate-none truncate">{item?.location}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-[#8F9093] font-rubik text-sm">No gold medals</p>
                )}
              </div>
            </div>

            <div className="flex h-16">
              <div className="w-2/6 border border-[#2B2D33] text-[#CECDD2] flex items-center justify-center">
                {/* {item?.stage} */}Silver
              </div>
              <div className="w-4/6 border border-[#2B2D33] text-[#88898C] flex items-center flex-col justify-center ">
                {medals?.gold_place?.length > 0 ? (
                  medals?.gold_place?.map((item, i) => {
                    const formattedDate = formatDate(item.fight_date);
                    return (
                      <div className="flex items-center justify-between px-5 text-center w-full py-1 gap-4" key={i}>
                        <p className="text-sm">{formattedDate}</p>
                        <p className="text-sm truncate-none truncate">{item?.location}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-[#8F9093] font-rubik text-sm">No gold medals</p>
                )}
              </div>
            </div>

            <div className="flex h-16">
              <div className="w-2/6 border border-[#2B2D33] text-[#F79429] flex items-center justify-center">
                {/* {item?.stage} */}Bronze
              </div>
              <div className="w-4/6 border border-[#2B2D33] text-[#88898C] flex items-center flex-col justify-center ">
                {medals?.bronze_place?.length > 0 ? (
                  medals?.bronze_place?.map((item, i) => {
                    const formattedDate = formatDate(item.fight_date);
                    return (
                      <div className="flex items-center justify-between px-5 text-center w-full py-1 gap-4" key={i}>
                        <p className="text-sm">{formattedDate}</p>
                        <p className="text-sm truncate-none truncate">{item?.location}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-[#8F9093] font-rubik text-sm">No bronze medals</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medals;
