import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Login from "../mutations/Login";
import { graphql } from 'react-apollo';
import CurrentUser from "../queries/CurrentUser";

const Dashboard = () => {

    return (
      <div>
        <h3>You are logged in.</h3>
      </div>
    )
  }

export default Dashboard;