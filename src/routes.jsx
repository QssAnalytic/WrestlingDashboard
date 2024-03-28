import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Comparison from "./pages/comparison";
// import { lazy } from "react";
// import { wait } from "./common/utils/wait";

// const Dashboard = lazy(() => wait(3000).then(() => import("./pages/dashboard")));
// const Comparison = lazy(() => wait(1000).then(() => import("./pages/comparison")));

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Dashboard />} />
      <Route path="/comparison" element={<Comparison />} />
    </Route>,
  ),
);

export { routes };
