import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import SignInForm from './sign_in_form';

class SignIn extends Component {
  handleSignIn = values => {
    console.log('Sign In Values:', values);

    this.props.signIn(values);
  }

  render() {
    console.log('Sign In Props:', this.props);

    return (
      <div>
        <h1 className="center">Sign In</h1>
        <div className="center">
          <SignInForm onSubmit={this.handleSignIn} authError={this.props.error} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.user.signInError,
  };
}

export default connect(mapStateToProps, {
  signIn,
})(SignIn);
