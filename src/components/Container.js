import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap'

export default class Container extends Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      <Jumbotron>
        <h2>
          <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
        </h2>
        {children}
      </Jumbotron>
    )
  }
}
