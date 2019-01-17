import React from "react";
import classnames from "classnames";

const InputField = ({
  classNames,
  label,
  requiredLabel,
  name,
  type = "input",
  errors,
  touched,
  types,
  ...rest
}) => {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
        {requiredLabel && <span> *</span>}
      </label>
      <div className="control">
        <input
          id={name}
          name={name}
          type={type}
          className={classnames("input", {
            "is-danger": errors && errors.length > 0
          })}
          {...rest}
        />
      </div>
      {errors && <p className="help is-danger">{errors}</p>}
    </div>
  );
};

export default InputField;
