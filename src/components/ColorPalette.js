import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addColor, setActiveColor } from "../features/colorSlice";

const ColorPalette = () => {
  const [input, setInput] = useState("");
  const colors = useSelector((state) => state.color.colors);
  const activeColor = useSelector((state) => state.color.activeColor);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addColor(input));
      setInput("");
    }
  };

  const handleColorClick = (color) => {
    dispatch(setActiveColor(color));
  };

  return (
    <div>
      <h2>Color Palette</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a color"
        />
        <button type="submit">Add Color</button>
      </form>
      <div>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              backgroundColor: color,
              width: "50px",
              height: "50px",
              display: "inline-block",
              margin: "5px",
              cursor: "pointer",
              border: activeColor === color ? "2px solid black" : "none",
            }}
          ></div>
        ))}
      </div>
      <h3>Selected Color: {activeColor}</h3>
    </div>
  );
};

export default ColorPalette;
