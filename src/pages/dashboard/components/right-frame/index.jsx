import Medals from "../right-frame/components/medals";
import Decisions from "../right-frame/components/decisions";
import TotalPoints from "./components/total-points";
import Scores from "./components/scores";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { FilterContext } from "../../../../context/FilterContext";
import useGetSummary from "./hooks/useGetSummary";

const RightFrame = () => {
  const { t } = useTranslation();
  const { openMedals, setOpenMedals } = useContext(FilterContext);
  useGetSummary();

  return (
    <section className="text-center">
      <h1 className="font-customweight leading-5 tracking-wider  text-center text-[#83D24F] pt-2 pb-4">
      <a href="https://wrestling-dashboard-bt.vercel.app/">{t(`Career Summary`)}</a>
      </h1>

      <div className="border border-[#83D24F] h-[854px] rounded flex flex-col p-4 gap-3">
        <div className="flex gap-4">
          <Scores />
          <Medals openMedals={openMedals} setOpenMedals={setOpenMedals} />
        </div>

        <div className="bg-[#14151C] rounded mt-1 h-full">
          <TotalPoints />
          <Decisions />
        </div>
      </div>
    </section>
  );
};

export default RightFrame;
