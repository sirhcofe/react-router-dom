import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import MFE1Home from "./components/MFE1Home.tsx";
import DefaultApp from "./components/DefaultApp.tsx";
import SampleApp from "./components/SampleApp.tsx";
import MFE1Profile from "./components/MFE1Profile.tsx";

const browserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <MFE1Home />,
    },
    {
      path: "/profile",
      element: <MFE1Profile />,
    },
    {
      path: "/app/*",
      children: [
        {
          path: "",
          element: <DefaultApp />,
        },
        {
          path: "sample",
          element: <SampleApp />,
        },
      ],
    },
  ],
  {
    basename: "/mfe1",
  }
);

const App = () => {
  return <RouterProvider router={browserRouter} />;
};

export default App;
