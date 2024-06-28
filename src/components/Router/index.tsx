import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cart from "@/pages/Cart";
import ContactUs from "@/pages/ContactUs/index";
import ErrorNotFound from "@/pages/ErrorNotFound/index";
import HomePage from "@/pages/Home/index";
import Shop from "@/pages/Shop";

import DetailCard from "../../pages/DetailCard";
import App from "../App";

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
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/card/:id",
          element: <DetailCard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
