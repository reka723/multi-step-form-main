import { act } from "react-dom/test-utils";
import { textData } from "../data";

const { create } = require("@mui/material/styles/createTransitions");
const { createSlice } = require("@reduxjs/toolkit");

const initialFormState = {
  stepper: 1,
  isComplete: false,
  form: {
    name: null,
    emailAddress: null,
    phoneNumber: null,
    plan: "arcade",
    planPrice: 9,
    billing: "monthly",
    addOns: [1],
  },

  title: textData[0].title,
  text: textData[0].text,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    updateForm(state, action) {
      console.log(action.payload);
      for (const key in action.payload) {
        console.log(key);
        state.form[key] = action.payload[key];
      }
      state.isComplete = true;
    },
    changeStepper(state, action) {
      if (action.payload.value != 5) {
        state.stepper = action.payload.value;
        state.title = textData[action.payload.value - 1].title;
        state.text = textData[action.payload.value - 1].text;
      }
    },
  },
});

export default formSlice.reducer;
export const formActions = formSlice.actions;
