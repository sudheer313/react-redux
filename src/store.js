import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';
import counterReducer from './features/counterSlice';

export default configureStore({
  reducer: {
    todo: todoReducer,
    counter:counterReducer,
  }
});
