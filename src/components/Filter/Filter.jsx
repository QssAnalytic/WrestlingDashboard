import React, { useState } from 'react';
import Years from "./Years";
import useSWR from "swr";
import { filterEndpoints } from "../../services/api/endpoints";
import { getData } from "../../services/api/requests";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import Select from "./Select";

const Filter = () => {
  
  const { filterParams, setFilterParams, setFilterDialog, filterDialog  } = useContext(FilterContext);

  const { data: countries } = useSWR(filterEndpoints.countries, getData);

  const { data: fighters } = useSWR(filterParams?.country ? filterEndpoints.fighters(filterParams.country) : null, getData);

  const { data: years } = useSWR(filterParams?.wrestler ? filterEndpoints.years(filterParams.wrestler) : null, getData);

  const [defaultCountry, setDefaultCountry] = useState('aze');
  const [defaultWrestler, setDefaultWrestler] = useState(21493);
  const [defaultYear, setDefaultYear] = useState('2023');

  useState(() => {
    setFilterParams(prev => ({
      ...prev,
      country: defaultCountry,
      wrestler: defaultWrestler,
      years: defaultYear
    }));
  }, []);

  return (
    <div className="flex select-none text-base gap-4 items-center w-full px-10">
      <Select
        id={"country"}
        name={"Country"}
        data={countries}
        value={filterParams}
        setValue={setFilterParams}
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
      />
      <Select
        id={"wrestler"}
        name={"Fighter"}
        data={fighters}
        value={filterParams}
        setValue={setFilterParams}
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
      />
      <Years
        id={"years"}
        name={'Years'}
        data={years}
        value={filterParams}
        setValue={setFilterParams}
      />
    </div>
  );
};

export default Filter;
