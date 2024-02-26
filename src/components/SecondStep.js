import { Button, Switch, TextField } from '@mui/material';
import React, { useEffect, useReducer } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../store/formSlice';
import { Plan } from '../data';
import Card from './Card';
import BillingComponent from './BillingComponent';

const SecondStep = ({ title, handleBack }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const text = useSelector((state) => state.text);
  const stepper = useSelector((state) => state.stepper);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      plan: form.plan,
      billing: form.billing
    }
  });

  const onSubmit = (data) => {
    dispatch(formActions.changeStepper({ value: stepper + 1 }));
  };
  useEffect(() => {
    const subscription = watch((value) => {
      if (value.billing == true) {
        value.billing = 'Yearly';
      }
      if (value.billing == false) {
        value.billing = 'Monthly';
      }
      console.log(value.billing);
      dispatch(formActions.updateForm(value));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const fields = Plan.find((item) => item.id === form.billing);
  return (
    <form className="flex flex-col md:gap-12 " onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex flex-col mt-12 m-4 gap-4  ">
          <p className="text-3xl font-bold text-blue-950">{title}</p>
          <p className="text-slate-400">{text}</p>
          <div className="flex md:flex-row md:w-full flex-col justify-center">
            {fields.plans.map((item) => (
              <Card item={item} form={form} control={control} />
            ))}
          </div>
        </div>
      </div>

      <BillingComponent control={control} form={form} />

      <div className="absolute md:static bottom-0  w-full bg-white shadow-inner left-0 p-4  ">
        {stepper >= 2 && (
          <Button
            onClick={handleBack}
            variant="text"
            sx={{
              display: 'inline-block',
              color: 'GrayText',
              backgroundColor: 'transparent'
            }}>
            {'Go back'}
          </Button>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{ float: 'right', backgroundColor: 'rgb(23 37 84)' }}>
          {stepper <= 3 ? 'Next Step' : 'Finish'}
        </Button>
      </div>
    </form>
  );
};

export default SecondStep;
