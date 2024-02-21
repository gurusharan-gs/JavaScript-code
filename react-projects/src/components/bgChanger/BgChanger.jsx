import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      BgChanger
      <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
        <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
