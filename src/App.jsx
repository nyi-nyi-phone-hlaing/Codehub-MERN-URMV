import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import {
  Details,
  Error,
  Home,
  Popular,
  SearchResult,
  Upcoming,
  Watch,
} from "./pages/index";
import { loader as homeLoader } from "./pages/Home";
import { loader as popularLoader } from "./pages/Popular";
import { loader as upcomingLoader } from "./pages/Upcoming";
import { loader as searchLoader } from "./pages/SearchResult";
import { loader as detailsLoader } from "./pages/Details";
import { loader as watchLoader } from "./pages/Watch";

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <Error />,
    element: <Main />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "/popular", element: <Popular />, loader: popularLoader },
      { path: "/upcoming", element: <Upcoming />, loader: upcomingLoader },
    ],
  },
  {
    path: "/search/:title",
    element: <SearchResult />,
    errorElement: <Error />,
    loader: searchLoader,
  },
  {
    path: "/details/:id",
    element: <Details />,
    errorElement: <Error />,
    loader: detailsLoader,
  },
  {
    path: "/watch/:title/:id",
    element: <Watch />,
    errorElement: <Error />,
    loader: watchLoader,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
