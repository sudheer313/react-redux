import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import counterReducer from "./features/counterSlice";
import colorReducer from "./features/colorSlice";
import cartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    color: colorReducer,
    cart: cartReducer,
  },
});
