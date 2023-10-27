import { Button, Switch, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";

const SecondStep = ({ title }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const stepper = useSelector((state) => state.stepper);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      plan: form.plan,
      billing: form.billing,
    },
  });

  const onSubmit = (data) => {
    dispatch(formActions.changeStepper({ value: stepper + 1 }));
  };
  useEffect(() => {
    const subscription = watch((value) => {
      if (value.billing == true) {
        value.billing = "Yearly";
      }
      if (value.billing == false) {
        value.billing = "Monthly";
      }
      console.log(value.billing);
      dispatch(formActions.updateForm(value));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-slate-300 md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-stone-400 m-5">
        <p>{title}</p>
        <div className="flex flex-col mt-52 m-4 gap-4">
          <Controller
            name="plan"
            control={control}
            render={({ field }) => (
              <label>
                <input
                  type="radio"
                  required
                  {...field}
                  value={1}
                  defaultChecked={form.plan === "1"}
                />
                1
              </label>
            )}
          />
          <Controller
            name="plan"
            control={control}
            render={({ field }) => (
              <label>
                <input
                  type="radio"
                  required
                  {...field}
                  value={2}
                  defaultChecked={form.plan === "2"}
                />
                2
              </label>
            )}
          />
          <Controller
            name="plan"
            control={control}
            render={({ field }) => (
              <label>
                <input
                  type="radio"
                  required
                  {...field}
                  value={3}
                  defaultChecked={form.plan === "3"}
                />
                3
              </label>
            )}
          />
          <Controller
            name="billing"
            control={control}
            render={({ field }) => (
              <label>
                Monthly
                <Switch {...field} defaultChecked={form.billing === "Yearly"} />
                Yearly
              </label>
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

export default SecondStep;
