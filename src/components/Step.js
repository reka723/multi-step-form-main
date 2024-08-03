import React from 'react';

const Step = (props) => {
  return (
    <div
      className="m-2 flex md:gap-5 md:items-center md:w-48 w-16 flex-wrap content-center-center"
      onClick={() => {
        props.onClick(props.number);
      }}>
      <p
        className={`border-solid border-white rounded-full border-2 text-center w-8 h-8 leading-6 text-white ${
          props.isActive && 'bg-blue-200 text-cyan-900 border-blue-200'
        }`}>
        {props.number}
      </p>
      <div className="invisible md:visible text-xs md:text-base bg-teal-200 md:w-32">
        <p className="">Step {props.number}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Step;
