import React, { useEffect } from "react";
import Years from "./components/year-select";
import useSWR from "swr";
import { filterEndpoints } from "../../services/api/endpoints";
import { getData } from "../../services/api/requests";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import Select from "./components/select";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./components/language-select";
import Mode from "./components/mode";
import { list_fighters } from "../../pages/types";

const Filter = () => {
  console.log('1')
  const { filterParams, setFilterParams, setFilterDialog, filterDialog } = useContext(FilterContext);
  const { data: countries } = useSWR(filterEndpoints.countries, getData);
  const { data: fighters } = useSWR(
    filterParams?.country ? filterEndpoints.fighters(filterParams?.country) : null,
    getData,
  );
  const { data: years } = useSWR(
    filterParams?.wrestler ? filterEndpoints.years(filterParams?.wrestler) : null,
    getData,
  );

  const languages = [
    { code: "en", name: "EN" },
    { code: "aze", name: "AZE" },
    { code: "ru", name: "RU" },
  ];

  useEffect(() => {
    setFilterParams((prev) => ({
      ...prev,
      years: years?.map((item) => item.data),
    }));
  }, [years]);

  return (
    <div className="flex select-none text-base gap-4 items-center w-full px-10">
      {/* <Mode /> */}
      <Select
        id={"country"}
        name={"Country"}
        data={countries}
        value={filterParams}
        setValue={setFilterParams}
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
      />
      {/* {console.log('salam',fighters?.filter((fighter)=> fighter))} */}

      <Select
        id={"wrestler"}
        name={"Fighter"}
        data={fighters}
        value={filterParams}
        setValue={setFilterParams}
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
      />
      <Years id={"years"} name={"Years"} data={years} value={filterParams} setValue={setFilterParams} />
      <LanguageSelect data={languages} id={"lang"} name={"Lang"} value={filterParams} setValue={setFilterParams} />
    </div>
  );
};

export default Filter;
