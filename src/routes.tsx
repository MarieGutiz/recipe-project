import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Banner from "./components/hero/Banner";
import RecipeExtendedSearch from "./pages/RecipeExtendedSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Banner />,
      },
      {
        path: "recipe/:name",
        element: <RecipeExtendedSearch />,
      },
    ],
  },
]);

export default router;
