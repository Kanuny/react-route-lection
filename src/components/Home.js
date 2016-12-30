import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'

import AuthService from '../utils/AuthService'


export default function Home(props) {
  return (
    <div>
      <ButtonToolbar>
        <Button	
          bsStyle="primary"
          onClick={() => {
            props.route.auth.logout()
            browserHistory.push('login');
          }}
        > 
          Logout
        </Button>
      </ButtonToolbar>
      Home page
    </div>
  );
}
