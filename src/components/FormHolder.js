import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../store/formSlice';
import { useForm } from 'react-hook-form';
import FirstStep from './firstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

const FormHolder = () => {
  const title = useSelector((state) => state.title);
  const stepper = useSelector((state) => state.stepper);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(formActions.changeStepper({ value: stepper - 1 }));
  };

  return (
    <div className="bg-white  md:w-3/4 md:h-full w-11/12 md:static  m-auto absolute top-24 left-0 right-0 ml-auto rounded-lg md:m-0 overflow-hidden h-2/3  bg-white  m-5  ">
      {(() => {
        switch (stepper) {
          case 1:
            return <FirstStep title={title} />;
          case 2:
            return <SecondStep title={title} handleBack={handleBack} />;
          case 3:
            return <ThirdStep title={title} handleBack={handleBack} />;
          case 4:
            return <FourthStep title={title} handleBack={handleBack} />;
          default:
            return <p>No matching case found!</p>;
        }
      })()}
    </div>
  );
};

export default FormHolder;
