import { createContext, useState } from "react";

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const [dashboardDatas, setDashboardDatas] = useState({
    medals: undefined,
    fights: undefined,
    points: undefined,
    decisions: undefined,
  });

  return (
    <DashboardContext.Provider value={{ dashboardDatas, setDashboardDatas }}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
