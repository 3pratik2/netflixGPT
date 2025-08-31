import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  

const appStore = configureStore({
  reducer: {
    user: userReducer,   // <-- key is "user"
  },
});

export default appStore;
