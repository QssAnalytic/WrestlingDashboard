import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilterContextProvider from "./context/FilterContext.jsx";
import { SWRConfig } from "swr";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateIfStale: false,
        refreshInterval: 86400000,
        dedupingInterval: 86400000,
      }}>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </SWRConfig>
  </>,
);
