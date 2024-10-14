import React from "react";
import { useNavigate } from "react-router-dom";

const DefaultApp = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <p className="text-2xl text-blue-700">This is MFE1 Default App!</p>
      <button
        className="mt-5 px-3 py-2 border border-black rounded-full"
        onClick={() => navigate("/app/sample")}
      >
        Go to sample app
      </button>
    </div>
  );
};

export default DefaultApp;
