import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "@/constants/routes";
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
      path: ROUTES.home,
      element: <App />,
      errorElement: <ErrorNotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: ROUTES.contactUS,
          element: <ContactUs />,
        },
        {
          path: ROUTES.shop,
          element: <Shop />,
        },
        {
          path: ROUTES.cart,
          element: <Cart />,
        },
        {
          path: `${ROUTES.card}:id`,
          element: <DetailCard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
