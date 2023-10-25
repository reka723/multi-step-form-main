const { create } = require("@mui/material/styles/createTransitions");
const { createSlice } = require("@reduxjs/toolkit");

const initialFormState = {
  stepper: 1,
  isComplete: false,
  name: null,
  email: null,
  phone: null,
  plan: "arcade",
  planPrice: 9,
  billing: "monthly",
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
      if (action.payload != 5) state.stepper = action.payload;
    },
  },
});

export default formSlice.reducer;
export const formActions = formSlice.actions;
