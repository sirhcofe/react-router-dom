import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./style.css";
import MFE2Home from "./components/MFE2Home.tsx";
import DefaultBla from "./components/DefaultBla.tsx";
import BlackSheep from "./components/BlackSheep.tsx";

const UserPage = () => {
  const { userId } = useParams();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <p className="text-2xl">User: {userId}</p>
    </div>
  );
};

const Piu = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <img src="/mfe2/public/piu.jpg" alt="piu" width={414} height={414} />
    </div>
  );
};

const browserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <MFE2Home />,
    },
    {
      path: "/piu",
      element: <Piu />,
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
      path: "/users/:userId",
      element: <UserPage />,
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
