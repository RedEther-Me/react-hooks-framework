import React, { useState } from "react";

import FormContext from "./FormContext";

const defaultState = {
  fields: {},
  errors: {},
  touched: {},
  [`is-valid`]: undefined,
  [`is-invalid`]: undefined
};

const convertFields = (acc, [name, value]) => {
  const [valueState, setValueState] = useState(value);
  const [errorState, setErrorState] = useState(undefined);
  const [touchedState, setTouchedState] = useState(false);

  const onChange = evt => {
    const { value } = evt.target;

    setValueState(value);
    // setErrorState()
    setTouchedState(true);
  };

  return {
    ...acc,
    fields: {
      ...acc.fields,
      [name]: {
        value: valueState,
        onChange,
        onBlur: setTouchedState
      }
    },
    touched: {
      ...acc.touched,
      [name]: touchedState
    },
    errors: {
      ...acc.errors,
      [name]: {
        errors: errorState,
        setErrors: setErrorState
      }
    }
  };
};

const Form = ({
  initialState,
  validations,
  handleSubmit = values => {},
  children
}) => {
  const context = Object.entries(initialState).reduce(
    convertFields,
    defaultState
  );

  const onSubmit = evt => {
    // prevent default
    evt.preventDefault();

    // extract values
    const values = Object.entries(context.fields).reduce(
      (acc, [name, { value }]) => ({ ...acc, [name]: value }),
      {}
    );

    try {
      // validate
      validations.validateSync(values, {
        strict: true,
        abortEarly: false,
        stripUnknown: false,
        recursive: true
      });

      // submit
      handleSubmit(values);
    } catch (err) {
      console.log(err);

      if (err.name === "ValidationError") {
        err.inner.forEach(({ path, errors }) => {
          context.errors[path].setErrors(errors);
        });
      } else {
        throw err;
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FormContext.Provider value={context}>{children}</FormContext.Provider>
    </form>
  );
};

export default Form;
