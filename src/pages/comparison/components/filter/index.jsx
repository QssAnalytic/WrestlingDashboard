import React from "react";
import SelectCountry from "./components/select-country";
import Select from "../../../../components/filter/components/select";

export default function ComparisonFilter() {
  return (
    <div className="comparison-filter">
      <div className="filter-inner flex gap-[1.38rem] items-center">
        <SelectCountry />
        <Select />
      </div>
    </div>
  );
}
