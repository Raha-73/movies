import HomePage from "./pages/homePage.js";
import Search from "./pages/search.js";
import Movie from "./pages/movie.js";
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
    element: <Movie />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
