import HomePage from "./pages/HomePage/index.js";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound/index.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "movie/:id",
    element: <SingleMovie />,
  },
  { 
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
