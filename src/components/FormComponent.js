import React, { Children } from 'react';
import Stepper from './Stepper';
import FormHolder from './FormHolder';

const FormComponent = (props) => {
  return (
    <div className="md:flex-row md:h-4/5 md:w-4/5 bg-white rounded-xl   md:gap-10 md:justify-center md:p-5 flex md:p-2 min-w-min flex-col w-full h-full shadow-lg">
      <Stepper />
      <FormHolder />
    </div>
  );
};

export default FormComponent;
