import { Button } from '@mui/material';
import React, { useEffect, useReducer } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../store/formSlice';
import { AddOns, Plan } from '../data';

const FourthStep = ({ title, handleBack }) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const text = useSelector((state) => state.text);
  const stepper = useSelector((state) => state.stepper);

  const { control, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    dispatch(formActions.changeStepper({ value: stepper + 1 }));
  };
  let fee = null;
  let finalFee = 0;

  const addonPlan = AddOns.find((addon) => addon.id === form.billing);
  for (const billing of Plan) {
    if (billing.id === form.billing) {
      const matchingPlan = billing.plans.find((plan) => plan.name === form.plan);
      if (matchingPlan) {
        fee = matchingPlan.fee;
        finalFee += Number(matchingPlan.fee);
        break;
      }
    }
  }

  return (
    <form className="flex flex-col md:h-full md:relative " onSubmit={handleSubmit(onSubmit)}>
      <div className>
        <div className="flex flex-col mt-12 m-4 gap-4 ">
          <p className="text-3xl font-bold text-blue-950">{title}</p>
          <p className="text-slate-400">{text}</p>
          <div className="bg-slate-100 p-2">
            <div className="flex justify-between items-center border-b-2 pb-2 ">
              <div>
                <p>
                  {form.plan} ({form.billing})
                </p>
                <p>Change</p>
              </div>
              <div>
                ${fee}/{form.billing == 'Yearly' ? 'yr' : 'mo'}
              </div>
            </div>
            {form.addOns.map((addon) => {
              const matchingAddOn = addonPlan.plans.find((entry) => entry.id === addon);

              if (matchingAddOn) {
                finalFee += Number(matchingAddOn.price);
                return (
                  <div key={matchingAddOn.id} className="flex justify-between items-center">
                    <p>{matchingAddOn.title}</p>
                    <p>
                      +${matchingAddOn.price}/{form.billing == 'Yearly' ? 'yr' : 'mo'}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="flex justify-between items-center p-2">
            Total {form.billing == 'Yearly' ? '(per year)' : '(per month)'}: ${finalFee}
          </div>
        </div>
      </div>
      <div className="md:absolute fixed bottom-0  w-full bg-white md:shadow-none shadow-inner left-0 p-4  ">
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
          sx={{ float: 'right', backgroundColor: 'hsl(243, 100%, 62%)' }}>
          {stepper <= 3 ? 'Next Step' : 'Confirm'}
        </Button>
      </div>
    </form>
  );
};

export default FourthStep;
