import formReducer from "./formSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: formReducer,
});
export default store;
