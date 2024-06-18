import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/kip",
          element: <div>Hello</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
