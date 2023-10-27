import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const FirstStep = ({ title }) => {
  const { control, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  const stepper = useSelector((state) => state.stepper);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-slate-300 md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-stone-400 m-5">
        <p>{title}</p>
        <div className="flex flex-col mt-52 m-4 gap-4">
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
              <TextField required type="tel" {...field} name="Phone Number" />
            )}
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-orange-200 left-0 p-4 text-right">
        <Button type="submit" variant="contained">
          {stepper <= 3 ? "Next Step" : "Finish"}
        </Button>
      </div>
    </form>
  );
};

export default FirstStep;
