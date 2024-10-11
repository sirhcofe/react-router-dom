import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

const MFE1App = React.lazy(() => import("mfe1/app"));
const MFE2App = React.lazy(() => import("mfe2/app"));

const HelloPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white space-y-5">
      <img src="/dog.jpg" alt="dog-hello" width={1253} height={940} />
    </div>
  )
}

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white space-y-5">
      <p className="text-2xl">This is browser router</p>
    </div>
  )
}

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/hello",
    element: <HelloPage />
  },
  {
    path: "/mfe1/*",
    element: <MFE1App />
  },
  {
    path: "/mfe2/*",
    element: <MFE2App />
  }
])

const App = () => {
  return (
    <RouterProvider router={browserRouter} />
  );
};

export default App;
