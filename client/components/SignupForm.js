import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Signup from "../mutations/Signup";
import { graphql } from 'react-apollo';
import CurrentUser from "../queries/CurrentUser";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
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
        <h3>Sign Up</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default graphql(Signup)(SignupForm);