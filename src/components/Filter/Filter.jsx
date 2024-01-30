import Years from "./Years";
import useSWR from "swr";
import { filterEndpoints } from "../../services/api/endpoints";
import { getData } from "../../services/api/requests";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import Select from "./Select";
const Filter = () => {
  const { filterParams, setFilterParams, setFilterDialog, filterDialog } =
    useContext(FilterContext);

  const { data: countries } = useSWR(filterEndpoints.countries, getData);

  const { data: fighters } = useSWR(
    filterParams?.country
      ? filterEndpoints.fighters(filterParams.country)
      : null,
    getData
  );

  const { data: years } = useSWR(
    filterParams?.wrestler
      ? filterEndpoints.years(filterParams.wrestler)
      : null,
    getData
  );

  return (
    <div className=" flex select-none text-base gap-5 items-center w-full ">
      <Select
        data={countries}
        value={filterParams}
        setValue={setFilterParams}
        id={"country"}
        name={"Country"}
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
        filterKey={'data'}
      />
      <Select
        data={fighters}
        value={filterParams}
        setValue={setFilterParams}
        id={"wrestler"}
        name={"Fighter"}
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
