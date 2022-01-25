import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Login from "../mutations/Login";
import { graphql } from 'react-apollo';
import CurrentUser from "../queries/CurrentUser";

const Welcome = () => {

    return (
      <div>
        <h3>Welcome!</h3>
      </div>
    )
  }

export default Welcome;