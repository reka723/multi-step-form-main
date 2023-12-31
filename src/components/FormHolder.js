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
import ThirdStep from "./ThirdStep";
import Finish from "./Finish";

const FormHolder = () => {
  const { control, handleSubmit } = useForm({});
  const title = useSelector((state) => state.title);
  const stepper = useSelector((state) => state.stepper);
  const dispatch = useDispatch();
  const handleBack = () => {
    console.log(stepper);
    dispatch(formActions.changeStepper({ value: stepper - 1 }));
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
            return <SecondStep title={title} handleBack={handleBack} />;
          case 3:
            // Code to execute when key is equal to value
            // You can include JSX or other logic here
            return <ThirdStep title={title} handleBack={handleBack} />;
          case 4:
            // Code to execute when key is equal to value
            // You can include JSX or other logic here
            return <Finish title={title} handleBack={handleBack} />;
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
