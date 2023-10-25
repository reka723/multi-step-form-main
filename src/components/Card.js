import React, { Children } from "react";
import Stepper from "./Stepper";
import FormHolder from "./FormHolder";

const Card = (props) => {
  return (
    <div className="md:w-11/12 bg-slate-100 rounded-xl md:h-2/3  md:gap-10 md:justify-center md:p-5 flex md:p-2 min-w-min flex-col w-full h-full">
      <Stepper />
      <FormHolder></FormHolder>
    </div>
  );
};

export default Card;
