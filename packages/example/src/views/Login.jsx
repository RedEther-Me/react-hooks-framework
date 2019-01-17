import React, { useContext } from "react";
import * as Yup from "yup";

import { Form, Field } from "libraries/form-management";
// import { Form, Field } from "@framework/library";
import { StateContext } from "libraries/state-management";

import InputField from "components/InputField";

import { loginSubmitted, loginError } from "actions/auth";

const mapStateToProps = ({ state: { auth } }) => ({
  error: auth.error
});

const initialState = {
  username: "",
  password: ""
};

const validations = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
});

const handleSubmit = dispatch => values => {
  dispatch(loginSubmitted(values));
};

const Login = () => {
  const { dispatch, state } = useContext(StateContext);
  const { error } = mapStateToProps({ state });

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
              handleSubmit={handleSubmit(dispatch)}
            >
              {error && (
                <div className="notification is-danger">
                  <button
                    className="delete"
                    onClick={() => dispatch(loginError({}))}
                  />
                  {error}
                </div>
              )}

              <Field
                name="username"
                label="Username"
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
