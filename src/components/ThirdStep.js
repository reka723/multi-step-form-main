import { Button, Switch, TextField } from '@mui/material';
import React, { useEffect, useReducer } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../store/formSlice';
import { AddOns } from '../data';

const ThirdStep = ({ title, handleBack }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const text = useSelector((state) => state.text);
  const stepper = useSelector((state) => state.stepper);
  const defaultValues = form.addOns.reduce((result, id) => {
    result[id] = true;
    console.log(result);
    return result;
  }, {});

  const { control, handleSubmit, watch } = useForm({
    defaultValues: { ...defaultValues }
  });

  const onSubmit = (data) => {
    dispatch(formActions.changeStepper({ value: stepper + 1 }));
  };
  useEffect(() => {
    const subscription = watch((value) => {
      // dispatch(formActions.updateForm(value));
      const arrayOfIds = Object.keys(value).filter((key) => value[key]);
      Object.keys(value).forEach((asd) => {
        console.log(asd);
        console.log(value[asd]);
      });
      dispatch(formActions.updateForm({ addOns: arrayOfIds }));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const plan = AddOns.find((addon) => addon.id === form.billing);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className>
        <div className="flex flex-col mt-12 m-4 gap-4 ">
          <p className="text-3xl font-bold text-blue-950">{title}</p>
          <p className="text-slate-400">{text}</p>
          {plan.plans.map((addOn) => {
            let price;
            if (form.billing === 'Yearly') {
              price = <p>+{addOn.price}/yr</p>;
            } else if (form.billing === 'Monthly') {
              price = <p>+{addOn.price}/mo</p>;
            }
            return (
              <Controller
                key={addOn.id}
                name={addOn.id.toString()}
                control={control}
                render={({ field }) => (
                  <div className="flex">
                    <input
                      type="checkbox"
                      {...field}
                      defaultChecked={form.addOns.includes(Number(addOn.id.toString()))}
                    />
                    {addOn.title}
                    {addOn.text}
                    {price}
                  </div>
                )}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-white shadow-inner left-0 p-4  ">
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

export default ThirdStep;
