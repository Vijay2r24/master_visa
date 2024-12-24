import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../../src/MainLayout";
import Home from "../pages/Home";
import About from "../pages/AboutUs"

const AppRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/Home",
          element: <Home />,
        },
        {
            path: "/about-us",
            element: <About />,
          },
      ],
    },
  ]);
};

export default AppRoutes;