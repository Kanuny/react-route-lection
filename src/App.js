import React, { Component, PropTypes } from 'react';

import { Route, IndexRedirect, Router, browserHistory, Link } from 'react-router'
import AuthService from './utils/AuthService'

const auth = new AuthService('ZELbMWuZAmuQ6gEtpGDkOLVpDdV19ovV', 'qwerty322.eu.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/home' })
  }
}

class ThemedItem extends Component {
  static childContextTypes = {
    color: React.PropTypes.string,
  }

  render() {
    return (
      <div>
        <h1> Themed Item </h1>
        <div style={{ color: this.context.color }}> some text </div>
      </div>
    );
  }
} 

class App extends Component {
  static contextTypes = {
    color: React.PropTypes.string,
  }

  state = {
    color: '',
  }

  getChildContext() {
    return { color: this.state.color };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.color}
          type="color"
          onChange={(e) => this.setState({ color: e.target.value})}
        />
      </div>
    );
  } 
}

const Home = () => {
  return (
    <div>
      Home Page
    </div>
  );
}

function Desc (props) {
  console.log(props.params);
  return (
    <div> {props.params.id} </div>
  ); 
}

function Layout(props) {
  const isLoggedIn = !!localStorage.getItem('id_token');

  return (
    <div>
      <header>
        {
          isLoggedIn
            ? <button
              onClick={() => {
                props.route.auth.logout();
                browserHistory.push('home');
              }}
            > Logout </button>
            : <button onClick={() => props.route.auth.login()}> Login </button>
        }
      </header>
      <nav>
        <Link to="/home" > Home </Link>
        <Link to="/description" > Desc </Link>
      </nav>

      <div> {props.children} </div>

    </div>
  );
}

export default () => {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Layout} auth={auth} >
        <Route path="home" component={Home} />


        <Route
          path="description/:id"
          onEnter={requireAuth}
          component={Desc}
        />
      </Route>
    </Router>
  );
}
