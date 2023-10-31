import { Button, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";

const FirstStep = ({ title }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const stepper = useSelector((state) => state.stepper);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: form.name,
      emailAddress: form.emailAddress,
      phoneNumber: form.phoneNumber,
    },
  });

  const onSubmit = (data) => {
    dispatch(formActions.changeStepper({ value: stepper + 1 }));
  };
  useEffect(() => {
    const subscription = watch((value) =>
      dispatch(formActions.updateForm(value))
    );

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-slate-300 md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-stone-400 m-5">
        <p>{title}</p>
        <div className="flex flex-col mt-52 m-4 gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField required {...field} name="Name" />
            )}
          />
          <Controller
            name="emailAddress"
            control={control}
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
            render={({ field }) => (
              <TextField required type="tel" {...field} name="Phone Number" />
            )}
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-orange-200 left-0 p-4  ">
        <Button type="submit" variant="contained" sx={{ float: "right" }}>
          {stepper <= 3 ? "Next Step" : "Finish"}
        </Button>
      </div>
    </form>
  );
};

export default FirstStep;
