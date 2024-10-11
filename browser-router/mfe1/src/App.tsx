import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import MFE1Home from "./components/MFE1Home.tsx";
import DefaultApp from "./components/DefaultApp.tsx";
import SampleApp from "./components/SampleApp.tsx";
import MFE1Profile from "./components/MFE1Profile.tsx";

const hashRouter = createHashRouter(
  [
    {
      path: "/",
      element: <MFE1Home />,
    },
    {
      path: "app/*",
      children: [
        {
          path: "/",
          element: <DefaultApp />,
        },
        {
          path: "/sample",
          element: <SampleApp />,
        },
      ],
    },
    {
      path: "/profile",
      element: <MFE1Profile />,
    },
  ],
  // {
  //   basename: "/mfe1",
  // }
);

const App = () => {
  return <RouterProvider router={hashRouter} />;
};

export default App;
