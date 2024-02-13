import React, { useEffect } from "react";
import { useState } from "react";
const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [colorType, setColorType] = useState("hex");

  const handleColorClick = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleColorHEX = () => {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[handleColorClick(hex.length)];
    }
    setColor(hexColor);
  };

  const handleColorRGB = () => {
    let R = handleColorClick(255);
    let G = handleColorClick(255);
    let B = handleColorClick(255);
    setColor(`rgb(${R},${G},${B})`);
  };

  useEffect(() => {
    colorType === "rgb" ? handleColorRGB() : handleColorHEX();
  }, [colorType]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: `${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "20%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{colorType === "hex" ? "hex color" : "rgb color"}</h1>
        <h3>{color}</h3>
        <button onClick={() => setColorType("rgb")}>RBG</button>
        <button onClick={() => setColorType("hex")}>HEX</button>
        <button
          style={{
            padding: "8px 12px",
            borderRadius: "50px",
            outline: "none",
            border: "none",
            background: "blue",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={colorType === "hex" ? handleColorHEX : handleColorRGB}
        >
          Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
