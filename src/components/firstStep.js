import { Button, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";

const FirstStep = ({ title }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const text = useSelector((state) => state.text);
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
      <div className=" md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-white  m-5 shadow-lg">
        <div className="flex flex-col mt-12 m-4 gap-4 ">
          <p className="text-3xl font-bold text-blue-950">{title}</p>
          <p className="text-slate-400">{text}</p>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <label className="-mb-2 text-blue-950 font-medium">Name</label>
                <TextField
                  required
                  {...field}
                  name="Name"
                  placeholder="e.g. Stephen King"
                />
              </>
            )}
          />
          <Controller
            name="emailAddress"
            control={control}
            render={({ field }) => (
              <>
                <label className="-mb-2 text-blue-950 font-medium">
                  Email Address
                </label>
                <TextField
                  required
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  {...field}
                  name="Email"
                />
              </>
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <>
                <label className="-mb-2 text-blue-950 font-medium">
                  Phone Number
                </label>
                <TextField
                  required
                  type="tel"
                  placeholder="e.g. 0613 231 3555"
                  pattern="[0-9]{4} [0-9]{3} [0-9]{4}"
                  maxlength="12"
                  {...field}
                  name="Phone"
                />
              </>
            )}
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-white shadow-inner left-0 p-4  ">
        <Button
          type="submit"
          variant="contained"
          sx={{ float: "right", backgroundColor: "rgb(23 37 84)" }}
        >
          {stepper <= 3 ? "Next Step" : "Finish"}
        </Button>
      </div>
    </form>
  );
};

export default FirstStep;
