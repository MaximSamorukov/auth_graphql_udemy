import React, { Component } from "react";
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { Link } from 'react-router';
import Logout from '../mutations/Logout';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [
        {
          query
        }
      ]
    })

  }

  renderButtons() {
    const { currentUser, loading } = this.props.data;

    if (loading) {
      return (
        <div />
      )
    }
    if (currentUser) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    }
    return (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  }

  render() {
    const { currentUser, loading } = this.props.data;
    console.log(currentUser, loading );

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(Logout)(graphql(query)(Header));