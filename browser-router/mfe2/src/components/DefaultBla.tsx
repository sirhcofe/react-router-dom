import React from "react";

const DefaultBla = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <p className="text-2xl">Baa, baa, black sheep, have you any wool?</p>
      <button
        className="mt-5 px-6 py-2 border border-black rounded-full"
        onClick={() => navigate("/blabla/blacksheep")}
      >
        🐑⚫
      </button>
    </div>
  );
};

export default DefaultBla;
