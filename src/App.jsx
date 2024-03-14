import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="m-auto container pt-4">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
