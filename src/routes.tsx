import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Banner from "./components/hero/Banner";
import RecipeExtendedSearch from "./pages/RecipeExtendedSearch";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Banner />,
      },
      {
        path: "recipe/:name",
        element: <RecipeExtendedSearch />,
      },
      {
        path: "recipe/diet/:dietType",
        element: <RecipeExtendedSearch />,
      },
    ],
  },
]);

export default router;
