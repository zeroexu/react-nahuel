import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import SignIn from './pages/sign-in';
import Dashboard from './pages/dashboard';
import PrivateRoute from './routes/private-routes';
import PublicRoute from './routes/public-routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={true}
            component={SignIn}
            path='/signin'
            exact
          />
          <PublicRoute restricted={true} component={SignIn} path='/' exact />
          <PrivateRoute component={Dashboard} path='/dashboard' exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
