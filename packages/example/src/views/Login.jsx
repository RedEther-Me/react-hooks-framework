import React from "react";
import * as Yup from "yup";

import Form from "components/Form";
import Field from "components/Field";
import InputField from "components/InputField";

const formSubmit = evt => {
  console.log(evt);
};

const initialState = {
  username: "",
  password: ""
};

const validations = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
});

const handleSubmit = values => {
  console.log("submit --- ", values);
};

const Login = () => {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">
        <Form
          onSubmit={formSubmit}
          initialState={initialState}
          validations={validations}
          handleSubmit={handleSubmit}
        >
          <Field name="username" label="User Name" component={InputField} />
          <Field
            name="password"
            label="Password"
            component={InputField}
            type="password"
          />
          <button className="button">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
