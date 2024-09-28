import HomePage from "./pages/homePage.js";
import Search from "./pages/Search";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/notFound.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "search",
    element: <Search />,
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
