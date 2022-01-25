import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Signup from "../mutations/Signup";
import { graphql } from 'react-apollo';
import CurrentUser from "../queries/CurrentUser";
import { hashHistory } from 'react-router';

class SignupForm extends Component {
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
      const errors = error.graphQLErrors.map((item) => item.message);
      this.setState({ errors });
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

export default graphql(CurrentUser)(graphql(Signup)(SignupForm));