import { createContext, useState } from "react";

export const countryContext = createContext();

const CountrySelectValue = ({ children }) => {

    const [countryTargetValue, setCountryTargetValue] = useState("");
    const [fighterTargetValue, setFighterTargetValue] = useState("");

    const values = {
        countryTargetValue, setCountryTargetValue,
        fighterTargetValue, setFighterTargetValue

    };

    return (
        <countryContext.Provider value={values}>{children}</countryContext.Provider>
    );
};

export default CountrySelectValue;



