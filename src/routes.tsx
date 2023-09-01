import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./pages/Layout";
import GamesDetail from "./pages/GamesDetail";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:slug", element: <GamesDetail /> },
    ],
  },
]);

export default router;
