import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  activeColor: "",
};
const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.colors.push(action.payload);
    },
    setActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },
  },
});

export const { addColor, setActiveColor } = colorSlice.actions;
export default colorSlice.reducer;
