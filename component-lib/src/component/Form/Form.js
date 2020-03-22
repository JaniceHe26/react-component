import React from "react";

const Form = props => (
  <>
    <label for={props.label}>{props.label}</label>
    <input
      name={props.label}
      label={props.label}
      placeholder={props.placeholder}
      className={props.type}
    />
  </>
);

export default Form;
