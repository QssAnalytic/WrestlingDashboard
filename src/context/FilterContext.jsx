import { createContext, useState } from "react";

export const FilterContext = createContext();
 
const FilterContextProvider = (props) => {
  const [filterParams, setFilterParams] = useState({
    country: undefined,
    wrestler: undefined, // fighter_id
    years: undefined,
  })
  
  const [filterDialog, setFilterDialog] = useState({
    country: false,
    wrestler: false,
  })
  console.log('filterParams', filterParams.wrestler)


  return (
    <FilterContext.Provider value={{ filterParams, setFilterParams, filterDialog, setFilterDialog }}>{props.children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
