import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import { Button } from "@mui/material";
import BillingComponent from "./BillingComponent";

const FormContent = ({
  title,
  handleBack,
  children,
  control,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const text = useSelector((state) => state.text);
  const stepper = useSelector((state) => state.stepper);
  const onSubmit = (data) => {
    if (stepper >= 4) {
      console.log("data to submit: " + data);
      return;
    }
    dispatch(formActions.changeStepper({ value: stepper + 1 }));
  };
  
  return (
    <form
      className="flex flex-col md:h-full md:relative "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className>
        <div className="flex flex-col mt-12 m-4 gap-4 ">
          <p className="text-3xl font-bold text-blue-950">{title}</p>
          <p className="text-slate-400">{text}</p>
          {children}
        </div>
      </div>
      {stepper == 2 && <BillingComponent control={control} form={form} />}
      <div className="md:absolute fixed bottom-0  w-full bg-white md:shadow-none shadow-inner left-0 p-4  ">
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
          sx={{ float: "right", backgroundColor: "hsl(243, 100%, 62%)" }}
        >
          {stepper <= 3 ? "Next Step" : "Confirm"}
        </Button>
      </div>
    </form>
  );
};

export default FormContent;
