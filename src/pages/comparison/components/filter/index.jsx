import Mode from "../../../../components/filter/components/mode";
import SelectCountry from "./components/select-country";
import SelectWrestler from "./components/select-wrestler";
import SelectYear from "./components/select-year";

export default function ComparisonFilter() {
  return (
    <div className="comparison-filter">
      <div className="filter-inner flex gap-[1.38rem] items-center">
        <Mode />
        <SelectCountry name="F1" id="country-first" />
        <SelectWrestler name="Fighter 1" />
        <SelectYear name={"Years (F1)"} />
        <SelectCountry name="F2" id="country-second" />
        <SelectWrestler name="Fighter 2" />
        <SelectYear name={"Years (F2)"} />
      </div>
    </div>
  );
}
