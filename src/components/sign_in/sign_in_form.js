import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/input';

let SignIn = props => {
  const { onSubmit, handleSubmit, authError } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <Field name="email" label="email" component={Input} />
      </div>
      <div className="row">
        <Field name="password" label="password" type="password" component={Input} />
      </div>
      <div className="row">
        <div className="col s12 right-align">
          <button className="btn blue darken-2">Sign In</button>
          <p className="red-text text-darken-2">{authError}</p>
        </div>
      </div>
    </form>
  );
}

function validate({ email, password}) {
  const errors = {};

  if (!email) {
    errors.email = 'Please enter your email';
  }

  if (!password) {
    errors.password = 'Please enter your password';
  }

  return errors;
}

export default reduxForm({
  form: 'sign-in-form',
  validate,
})(SignIn);
