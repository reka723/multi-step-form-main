import {
  Button,
  RadioGroup,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import { Controller, useForm } from "react-hook-form";
import FirstStep from "./firstStep";
import SecondStep from "./SecondStep";

const FormHolder = () => {
  const { control, handleSubmit } = useForm({});
  const title = useSelector((state) => state.title);
  const stepper = useSelector((state) => state.stepper);
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(formActions.changeStepper({ value: value }));
  };

  //   const onSubmit = (data) => {
  //     handleClick(stepper + 1);
  //     if (stepper == 1) {
  //       dispatch(formActions.firstStep(data));
  //     }
  //   };
  return (
    <>
      {(() => {
        switch (stepper) {
          case 1:
            // Code to execute when key is equal to value
            // You can include JSX or other logic here
            return <FirstStep title={title} />;
          case 2:
            // Code to execute when key is equal to value
            // You can include JSX or other logic here
            return <SecondStep title={title} />;

          default:
            // Code to execute when key doesn't match any case
            // You can include JSX or other logic here
            return <p>No matching case found!</p>;
        }
      })()}
      {/* <div className="absolute bottom-0 w-full bg-orange-200 left-0 p-4 text-right">
        <Button type="submit" variant="contained">
          {stepper <= 3 ? "Next Step" : "Finish"}
        </Button>
      </div> */}
    </>
  );
};

export default FormHolder;
