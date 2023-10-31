import { Button, Switch, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import { Plan } from "../data";

const SecondStep = ({ title, handleBack }) => {
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

  const fields = Plan.find((item) => item.id === form.billing);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-slate-300 md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-stone-400 m-5">
        <p>{title}</p>
        {fields.plans.map((item) => (
          <Controller
            key={item.name}
            name="plan"
            control={control}
            render={({ field }) => (
              <label key={item.name}>
                <input
                  type="radio"
                  required
                  {...field}
                  value={item.name}
                  defaultChecked={form.plan === item.name}
                />
                <div>
                  <p>{item.name}</p>
                  <p>{item.fee}</p>
                </div>
              </label>
            )}
          />
        ))}
        <div className="flex flex-col mt-40 m-4 gap-4">
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

      <div className="absolute bottom-0 w-full bg-orange-200 left-0 p-4 ">
        {stepper >= 2 && (
          <Button
            onClick={handleBack}
            variant="contained"
            sx={{ display: "inline-block" }}
          >
            {"Go back"}
          </Button>
        )}
        <Button variant="contained" type="submit" sx={{ float: "right" }}>
          {stepper <= 3 ? "Next Step" : "Finish"}
        </Button>
      </div>
    </form>
  );
};

export default SecondStep;
