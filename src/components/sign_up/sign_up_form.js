import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/input';

const SignUpForm = props => {
  const { onSubmit, handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <Field name="email" label="Email" component={Input} />
        <Field name="password" label="Password" size="m6 s12" type="password" component={Input} />
        <Field name="confirmPassword" label="Confirm Password" size="m6 s12" type="password" component={Input} />
      </div>
      <div className="row center">
        <div className="col s6">
          <button className="btn blue waves-effect waves-light" type="button">Reset</button>
        </div>
        <div className="col s6">
          <button className="btn blue waves-effect waves-light">Sign Up</button>
        </div>
      </div>
    </form>
  );
}

function validate({ email, password, confirmPassword }) {
  const errors = {};

  if (!email) {
    errors.email = 'Please enter your email';
  }

  if (!password) {
    errors.password = 'Please create a password';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
}

export default reduxForm({
  form: 'sign-up-form',
  validate,
})(SignUpForm);
