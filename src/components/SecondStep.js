import { Button, Switch, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import { Plan } from "../data";

const SecondStep = ({ title, handleBack }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const text = useSelector((state) => state.text);
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
      <div className="md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-white  m-5 shadow-lg">
        <div className="flex flex-col mt-12 m-4 gap-4 ">
          <p className="text-3xl font-bold text-blue-950">{title}</p>
          <p className="text-slate-400">{text}</p>
          {fields.plans.map((item) => (
            <Controller
              key={item.name}
              name="plan"
              control={control}
              render={({ field }) => (
                <div className="">
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
                      {form.billing === "Yearly" && <p>2 months free</p>}
                    </div>
                  </label>
                </div>
              )}
            />
          ))}
        </div>
        <div className="flex flex-col mt-12 m-4 gap-4">
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

      <div className="absolute bottom-0 w-full bg-white shadow-inner left-0 p-4  ">
        {stepper >= 2 && (
          <Button
            onClick={handleBack}
            variant="text"
            sx={{
              display: "inline-block",
              color: "GrayText",
              backgroundColor: "transparent",
            }}
          >
            {"Go back"}
          </Button>
        )}
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

export default SecondStep;
