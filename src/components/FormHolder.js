import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import { Controller, useForm } from "react-hook-form";

const FormHolder = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { name: "", emailAddress: "", phoneNumber: "" },
  });
  const stepper = useSelector((state) => state.stepper);
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(formActions.changeStepper(value));
  };

  const onSubmit = (data) => {
    handleClick(stepper + 1);
    dispatch(formActions.firstStep(data));
  };
  return (
    <div className="bg-slate-600 md:w-1/2 w-11/12  m-auto absolute top-28 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3">
      <form
        className="flex flex-col bg-stone-400 m-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {(() => {
          switch (stepper) {
            case 1:
              // Code to execute when key is equal to value
              // You can include JSX or other logic here
              return (
                <>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={null}
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
                </>
              );
            case 2:
              // Code to execute when key is equal to value
              // You can include JSX or other logic here
              return <p>2</p>;

            default:
              // Code to execute when key doesn't match any case
              // You can include JSX or other logic here
              return <p>No matching case found!</p>;
          }
        })()}
        <Button type="submit" variant="contained">
          {stepper <= 3 ? "Next" : "Finish"}
        </Button>
      </form>
    </div>
  );
};

export default FormHolder;
