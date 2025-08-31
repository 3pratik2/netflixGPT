import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,   // <-- key is "user"
    movies : moviesReducer,
  },
});

export default appStore;
