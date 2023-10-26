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

const FormHolder = () => {
  const { control, handleSubmit } = useForm({});
  const stepper = useSelector((state) => state.stepper);
  const name = useSelector((state) => state.name);
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(formActions.changeStepper({ value: value }));
  };

  const onSubmit = (data) => {
    handleClick(stepper + 1);
    if (stepper == 1) {
      dispatch(formActions.firstStep(data));
    }
  };
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      {(() => {
        switch (stepper) {
          case 1:
            // Code to execute when key is equal to value
            // You can include JSX or other logic here
            return (
              <div className="bg-slate-300 md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-stone-400 m-5">
                <p>{title}</p>
                <div className="flex flex-col mt-52 m-4 gap-4">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={name}
                    render={({ field }) => (
                      <TextField required {...field} name="Name" />
                    )}
                  />
                  <Controller
                    name="emailAddress"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <TextField
                        required
                        type="email"
                        {...field}
                        name="Email Address"
                      />
                    )}
                  />
                  <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <TextField
                        required
                        type="tel"
                        {...field}
                        name="Phone Number"
                      />
                    )}
                  />
                </div>
              </div>
            );
          case 2:
            // Code to execute when key is equal to value
            // You can include JSX or other logic here
            return (
              <div className="bg-slate-300 md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-stone-400 m-5">
                <p>{title}</p>
                <div className="flex flex-col mt-52 m-4 gap-4">
                  <Controller
                    name="plan"
                    control={control}
                    render={({ field }) => (
                      <input type="radio" value={"1"} {...field} />
                    )}
                  />
                  <Controller
                    name="plan"
                    control={control}
                    render={({ field }) => (
                      <input type="radio" value={"2"} {...field} />
                    )}
                  />
                  <Controller
                    name="plan"
                    control={control}
                    render={({ field }) => (
                      <input type="radio" value={"3"} {...field} />
                    )}
                  />
                </div>
              </div>
            );

          default:
            // Code to execute when key doesn't match any case
            // You can include JSX or other logic here
            return <p>No matching case found!</p>;
        }
      })()}
      <div className="absolute bottom-0 w-full bg-orange-200 left-0 p-4 text-right">
        <Button type="submit" variant="contained">
          {stepper <= 3 ? "Next Step" : "Finish"}
        </Button>
      </div>
    </form>
  );
};

export default FormHolder;
