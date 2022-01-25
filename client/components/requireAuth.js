import React, { Component } from "react";
import CurrentUser from "../queries/CurrentUser";
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      const { loading, currentUser } = nextProps.data;

      if (!loading && !currentUser) {
        hashHistory.push('/login');
      }
    }
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  return graphql(CurrentUser)(RequireAuth);
};
