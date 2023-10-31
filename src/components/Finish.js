import { Button, Switch, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import { AddOns } from "../data";

const Finish = ({ title, handleBack }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const stepper = useSelector((state) => state.stepper);

  const { control, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    dispatch(formActions.changeStepper({ value: stepper + 1 }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-slate-300 md:w-1/2 w-11/12  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg overflow-hidden h-2/3  bg-stone-400 m-5">
        <p>{title}</p>
        <div className="flex flex-col mt-52 m-4 gap-4 break-words">
          <p>{JSON.stringify(form)}</p>
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
        <Button type="submit" variant="contained" sx={{ float: "right" }}>
          {stepper <= 3 ? "Next Step" : "Finish"}
        </Button>
      </div>
    </form>
  );
};

export default Finish;
