import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./style.css";

const MFE1App = React.lazy(() => import("mfe1/app"));
const MFE2App = React.lazy(() => import("mfe2/app"));

const HelloPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white space-y-5">
      <img src="public/dog.jpg" alt="dog-hello" width={1253} height={940} />
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white space-y-5">
      <p className="text-2xl">This is hash router</p>
      <button
        className="w-32 py-2 border border-black rounded-full"
        onClick={() => navigate("/hello")}
      >
        Go to Hello
      </button>
      <p className="mt-5 text-black text-xl">Child MFEs:</p>
      <div className="flex space-x-5">
        <button
          className="w-32 py-2 border border-black rounded-full"
          onClick={() => (window.location.href = "/mfe1")} // forces a reload
        >
          MFE1
        </button>
        <button
          className="w-32 py-2 border border-black rounded-full"
          onClick={() => (window.location.href = "/mfe2")} // forces a reload
        >
          MFE2
        </button>
      </div>
    </div>
  );
};

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hello",
    element: <HelloPage />,
  },
  {
    path: "/mfe1/*",
    element: (
      <Suspense fallback={<div>Loading MFE1...</div>}>
        <MFE1App />
      </Suspense>
    ),
  },
  {
    path: "/mfe2/*",
    element: (
      <Suspense fallback={<div>Loading MFE2...</div>}>
        <MFE2App />
      </Suspense>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={browserRouter} />;
};

export default App;
