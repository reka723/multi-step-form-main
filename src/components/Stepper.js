import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../store/formSlice';
import Step from './Step';
const Stepper = () => {
  const isComplete = useSelector((state) => state.isComplete);
  const stepper = useSelector((state) => state.stepper);
  const dispatch = useDispatch();
  const handleClick = (value) => {
    if (isComplete) dispatch(formActions.changeStepper({ value: value }));
  };
  return (
    <div
      className={`md:rounded-lg md:flex-col md:w-1/4 md:justify-center md:min-w-max flex justify-center items-center pt-10 pb-10 md:bg-desktop_background bg-mobile_background bg-cover bg-no-repeat bg-center w-full`}>
      <div>
        <Step
          number={1}
          title={'Your info'}
          onClick={handleClick}
          isActive={stepper == 1}
          text={'Please provide your name, email address and phone number.'}
        />
      </div>
      <div>
        <Step number={2} title={'Select plan'} onClick={handleClick} isActive={stepper == 2} />
      </div>
      <div>
        <Step number={3} title={'Add ons'} onClick={handleClick} isActive={stepper == 3} />
      </div>
      <div>
        <Step number={4} title={'Summary'} onClick={handleClick} isActive={stepper == 4} />
      </div>
    </div>
  );
};

export default Stepper;
