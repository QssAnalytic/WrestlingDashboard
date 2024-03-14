import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Comparison from "./pages/comparison";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Dashboard />} />
      <Route path="/comparison" element={<Comparison />} />
    </Route>,
  ),
);

export {routes}
