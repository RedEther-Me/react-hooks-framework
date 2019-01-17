import React from "react";
import * as Yup from "yup";

import { Form, Field } from "libraries/form-management";
// import { Form, Field } from "@framework/library";

import InputField from "components/InputField";

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
    <div className="login">
      <div className="columns is-mobile">
        <div className="column" />
        <div className="login-vertical-column column is-one-quarter is-light">
          <div className="login-vertical-spacer" />
          <div className="login-form">
            <Form
              initialState={initialState}
              validations={validations}
              handleSubmit={handleSubmit}
            >
              <Field
                name="username"
                label="User Name"
                requiredLabel
                component={InputField}
              />
              <Field
                name="password"
                label="Password"
                component={InputField}
                type="password"
              />
              <div className="field is-grouped">
                <div className="control">
                  <button className="button">Submit</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
