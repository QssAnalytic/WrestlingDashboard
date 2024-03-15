import Mode from "../../../../components/filter/components/mode";
import SelectCountry from "./components/select-country";

export default function ComparisonFilter() {
  return (
    <div className="comparison-filter">
      <div className="filter-inner flex gap-[1.38rem] items-center">
        <Mode />
        <SelectCountry name="F1" id="country-first" />
        <SelectCountry name="F2" id="country-second" />
      </div>
    </div>
  );
}
