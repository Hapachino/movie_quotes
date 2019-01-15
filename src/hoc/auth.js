import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  class Auth extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth() {
      const { auth, history } = this.props;
      console.log(auth);
      if (!auth) {
        history.push('/sign-in');
      }
    }

    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }

  return connect(mapStateToProps)(Auth);
}

function mapStateToProps(state) {
  return {
    auth: state.user.auth,
  }
}
