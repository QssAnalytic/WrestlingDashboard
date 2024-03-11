import { createContext, useState } from "react";

export const FilterContext = createContext();
 
const FilterContextProvider = (props) => {
  const [filterParams, setFilterParams] = useState({
    country: 'aze',
    wrestler: 21493, // fighter_id
    years: [],
    action_name : 'Takedown Score',  
    metrics : 'Defence Score',
    stats : '',
  })
  
  const [filterDialog, setFilterDialog] = useState({
    country: false,
    wrestler: false,
  })


  return (
    <FilterContext.Provider value={{ filterParams, setFilterParams, filterDialog, setFilterDialog }}>{props.children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
