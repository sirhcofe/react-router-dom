import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import MFE2Home from "./components/MFE2Home.tsx";
import DefaultBla from "./components/DefaultBla.tsx";
import BlackSheep from "./components/BlackSheep.tsx";

const Piu = () => {
  return <div>piu</div>;
};

const browserRouter = createBrowserRouter(
  [
    {
      path: "",
      element: <MFE2Home />,
    },
    {
      path: "/blabla/*",
      children: [
        {
          path: "",
          element: <DefaultBla />,
        },
        {
          path: "blacksheep",
          element: <BlackSheep />,
        },
      ],
    },
    {
      path: "piu",
      element: <Piu />,
    },
  ],
  {
    basename: "/mfe2",
  }
);

const App = () => {
  return <RouterProvider router={browserRouter} />;
};

export default App;
