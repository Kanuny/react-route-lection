import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap'

import AuthService from '../utils/AuthService'

export default class Login extends Component {
  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  render() {
    console.log('11');
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}
