import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import Step from "./Step";

const Stepper = () => {
  const stepper = useSelector((state) => state.stepper);
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(formActions.changeStepper(value));
  };
  return (
    <div>
      <div>
        <Step number={1} title={"Your info"} onClick={handleClick} />
        {stepper == 1 && <h2>selected</h2>}
      </div>
      <div>
        <Step number={2} title={"Select plan"} onClick={handleClick} />
        {stepper == 2 && <h2>selected</h2>}
      </div>
      <div>
        <Step number={3} title={"Add ons"} onClick={handleClick} />
        {stepper == 3 && <h2>selected</h2>}
      </div>
      <div>
        <Step number={4} title={"Summary"} onClick={handleClick} />
        {stepper == 4 && <h2>selected</h2>}
      </div>
    </div>
  );
};

export default Stepper;
