import HomePage from "./pages/HomePage/index.js";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound/index.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy/index.js";

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
    path: "privacypolicy",
    element: <PrivacyPolicy />,
  },
  { 
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
