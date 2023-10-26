import { act } from "react-dom/test-utils";

const { create } = require("@mui/material/styles/createTransitions");
const { createSlice } = require("@reduxjs/toolkit");
const text = [
  {
    title: "Your info",
    text: "Please provide your name, email address and phone number.",
  },
  {
    title: "Select plan",
    text: "Please provide your name, email address and phone number.",
  },
  {
    title: "Add ons",
    text: "Please provide your name, email address and phone number.",
  },
  {
    title: "Summary",
    text: "Please provide your name, email address and phone number.",
  },
];
const initialFormState = {
  stepper: 1,
  isComplete: false,
  name: null,
  email: null,
  phone: null,
  plan: "arcade",
  planPrice: 9,
  billing: "monthly",
  title: text[0].title,
  text: text[0].text,
  addons: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    firstStep(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.isComplete = true;
    },
    changeStepper(state, action) {
      console.log(action.payload);
      if (action.payload.value != 5) {
        state.stepper = action.payload.value;
        state.title = text[action.payload.value - 1].title;
        state.text = text[action.payload.value - 1].text;
      }
    },
  },
});

export default formSlice.reducer;
export const formActions = formSlice.actions;
