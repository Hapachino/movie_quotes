import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import SignUpForm from './sign_up_form';

class SignUp extends Component {
  handleSignUp = values => {
    console.log('Sign Up Values: ', values);

    this.props.signUp(values);
  }

  render() {
    return (
      <div>
        <h1 className="center">Sign Up</h1>

        <SignUpForm onSubmit={this.handleSignUp} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  signUp,
})(SignUp);
