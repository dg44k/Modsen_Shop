import React, { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "@/pages/Home/index";
import ErrorNotFound from "@/pages/ErrorNotFound/index";
import ContactUs from "@/pages/ContactUs/index";
import Shop from "@/pages/Shop";

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
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
