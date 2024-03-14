import { useTranslation } from "react-i18next";
import LineChart from "../../common/line-chart";

const OverallScoreByYears = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#14151C] rounded">
      <h1 className="flex justify-center items-center text-base font-bold rounded-t  p-2 bg-[#1c1d24]  text-[#a87b41]">
        {" "}
        {t(`Overall Scores by Years`)}
      </h1>
      <div className="flex justify-center items-center  pt-8 pb-2">
        {data ? <LineChart data={data} /> : <p className="flex justify-center items-center h-full">No data</p>}
      </div>
    </div>
  );
};

export default OverallScoreByYears;
