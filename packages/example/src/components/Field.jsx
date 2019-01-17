import React, { useContext } from "react";

import FormContext from "./FormContext";

const Field = ({ component, ...props }) => {
  const { name } = props;

  const Component = component;
  const Context = useContext(FormContext);

  const field = Context.fields[name];
  const errors = Context.errors[name];
  const touched = Context.touched[name];

  return (
    <Component
      value={field.value}
      errors={errors.errors}
      touched={touched}
      onChange={field.onChange}
      onBlur={field.onBlur}
      {...props}
    />
  );
};

export default Field;
