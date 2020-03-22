import React from "react";

const Checkbox = props => (
  <>
    <label>
      <span className="check"><input className={props.type} type="checkbox" /></span>
      {props.label}
      <span class="checkmark"></span>
    </label>
  </>
);
export default Checkbox;