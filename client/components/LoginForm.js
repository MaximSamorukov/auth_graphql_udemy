import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Login from "../mutations/Login";
import { graphql } from 'react-apollo';
import CurrentUser from "../queries/CurrentUser";
import { hashHistory } from "react-router";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.currentUser && nextProps.data.currentUser) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: CurrentUser }],
    })
    .catch((error) => {
      const errorMessages = error.graphQLErrors.map((item) => item.message);
      this.setState({ errors: errorMessages });
    })
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default graphql(CurrentUser)(graphql(Login)(LoginForm));