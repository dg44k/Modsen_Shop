import React, { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "@/pages/Home/index";
import ErrorNotFound from "@/pages/ErrorNotFound/index";

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorNotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
