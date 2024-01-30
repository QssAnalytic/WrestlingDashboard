import { createContext } from "react";
import { useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    const [filterParams, setFilterParams] = useState({
        country : undefined,
        wrestler : undefined,
        years : [],
    })
    const [filterDialog, setFilterDialog] = useState({
        country : false,
        wrestler : false,
    })
  return (
    <FilterContext.Provider value={{filterParams, setFilterParams, filterDialog, setFilterDialog}}>{props.children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
