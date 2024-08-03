import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../store/formSlice';
import { Controller, useForm } from 'react-hook-form';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FormContent from './Form';
import { firstPage, secondPage, thirdPage } from './FormPages';
import { Plan } from '../data';
import { useEffect } from 'react';

const FormHolder = () => {
  const form = useSelector((state) => state.form);
  const title = useSelector((state) => state.title);
  const stepper = useSelector((state) => state.stepper);
  const text = useSelector((state) => state.text);

  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(formActions.changeStepper({ value: stepper - 1 }));
  };
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      plan: form.plan,
      billing: form.billing
    }
  });
  useEffect(() => {
    const subscription = watch((value) => {
      if (value.billing == true) {
        value.billing = 'Yearly';
      }
      if (value.billing == false) {
        value.billing = 'Monthly';
      }
      console.log(value);
      dispatch(formActions.updateForm(value));
    });

    return () => subscription.unsubscribe();
  }, [watch('plan')]);
  const content = () => {
    const fields = Plan.find((item) => item.id === form.billing);
    console.log(fields);
    switch (stepper) {
      case 1:
        return firstPage(control);
      case 2:
        return secondPage(form, fields, control);
      case 3:
        return thirdPage(form, fields, control);
      case 4:
        return <FourthStep title={title} handleBack={handleBack} />;
      default:
        return <p>No matching case found!</p>;
    }
  };
  const formContent = content();
  // debugger;
  return (
    <div className="bg-white  md:w-3/4 md:h-full w-11/12 md:static  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg md:m-0 overflow-hidden h-2/3  bg-white  m-5  ">
      <FormContent
        handleBack={handleBack}
        handleSubmit={handleSubmit}
        control={control}
        title={title}>
        {formContent}
      </FormContent>
    </div>
  );
};

export default FormHolder;
