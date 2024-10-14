import React from "react";
import { useNavigate } from "react-router-dom";

const MFE2Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <p className="text-2xl">This is MFE2 home page</p>
      <p className="text-xl text-black mt-5">Navigate to:</p>
      <button
        className="w-32 py-2 flex items-center justify-center border rounded-full border-black mt-2"
        onClick={() => navigate("/piu")}
      >
        piu
      </button>
      <button
        className="w-32 py-2 flex items-center justify-center border rounded-full border-black mt-2"
        onClick={() => navigate("/blabla")}
      >
        blabla
      </button>
    </div>
  );
};

export default MFE2Home;
