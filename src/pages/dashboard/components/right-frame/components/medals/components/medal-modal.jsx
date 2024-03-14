import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { DashboardContext } from "../../../../../../../context/DashboardContext";
import { PlaceTypes } from "../../../../../../types";
import { formatDate } from "../../../../../../../common/utils/formatDate";
import Silver from "/img/medals/silver.svg";
import Gold from "/img/medals/gold.svg";
import Bronze from "/img/medals/bronz.svg";
import { useTranslation } from "react-i18next";

export default function MedalModal({ open, setOpen }) {
  const { dashboardDatas } = useContext(DashboardContext);
  const { t } = useTranslation();

  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 backdrop-blur-sm">
      <div
        className={`transition-all duration-200 rounded ${
          open ? "opacity-[100%] backdrop-blur-lg" : "opacity-0 backdrop-blur-0"
        } absolute  top-[50%] left-[35%] w-[60rem] translate-y-[-50%]`}>
        <div className="modal-head bg-[#1C1D24] rounded-t flex justify-between p-2">
          <div></div>
          <h3 className="text-[#83D24F] font-medium">Medals</h3>
          <div className="close-modal-btn border rounded border-[#828388] w-[29px] h-[29px] bg-[#fff] bg-opacity-[0.13]">
            <button className="text-[#828388]" onClick={() => setOpen((prev) => !prev)}>
              <IoMdClose size={28} />
            </button>
          </div>
        </div>
        <div className="modal-main bg-[#0B102F] rounded-b text-white flex justify-between py-[0.62rem] px-8">
          {dashboardDatas?.medals &&
            Object.entries(
              Object.keys(dashboardDatas?.medals)
                .slice(3, 6)
                .reduce((result, key) => {
                  result[key] = dashboardDatas?.medals[key];
                  return result;
                }, {}),
            )?.map((item, idx) => {
              {
                console.log("leng", item?.[1]);
              }
              return (
                <div className="medal-box flex flex-col justify-center items-center gap-8 p-8">
                  <div className="box-top flex flex-col items-center gap-1">
                    <h5 className="text-[#FCC417]">
                      {item?.[0] === PlaceTypes.GoldPlace
                        ? "Gold"
                        : item?.[0] === PlaceTypes?.SilverPlace
                        ? "Silver"
                        : "Bronze"}
                    </h5>
                    <div className="box-count cursor-pointer flex bg-[#121319] border border-[#fff] border-opacity-[0.16] p-1 rounded">
                      <div className="medal-img">
                        <img
                          src={
                            item?.[0] === PlaceTypes.GoldPlace
                              ? Gold
                              : item?.[0] === PlaceTypes?.SilverPlace
                              ? Silver
                              : Bronze
                          }
                          alt="medal"
                        />
                      </div>
                      <div className="medal-count flex justify-center items-center">
                        <p className="px-[0.32rem] border border-[#21232A] rounded">{item?.[1]?.length}</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-bottom">
                    <ul className="medal-list flex flex-col gap-5 h-40 overflow-scroll">
                      {item?.[1].length > 0 ? (
                        item?.[1]?.map((medal, idx) => {
                          const formattedDate = formatDate(medal.fight_date);
                          return (
                            <li className="medal flex gap-[1.25rem]">
                              <span>{idx + 1}</span>
                              <span>{formattedDate?.slice(3, formattedDate?.length)}</span>
                              <span className="truncate">{medal.location}</span>
                            </li>
                          );
                        })
                      ) : (
                        <p className="text-[#8F9093] font-rubik text-sm">
                          {t(
                            `No ${
                              item?.[0] === PlaceTypes.GoldPlace
                                ? "gold"
                                : item?.[0] === PlaceTypes.SilverPlace
                                ? "silver"
                                : "bronze"
                            } medals`,
                          )}
                        </p>
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
