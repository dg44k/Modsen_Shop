import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "@/pages/Home/index";
import ErrorNotFound from "@/pages/ErrorNotFound/index";
import ContactUs from "@/pages/ContactUs/index";
import Shop from "@/pages/Shop";
import DetailCard from "../../pages/DetailCard";
import Cart from "@/pages/Cart";

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
