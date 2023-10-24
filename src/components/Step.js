import React from "react";

const Step = (props) => {
  return (
    <div
      onClick={() => {
        props.onClick(props.number);
      }}
    >
      <p>{props.number}</p>
      <div>
        <p>Step {props.number}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Step;
