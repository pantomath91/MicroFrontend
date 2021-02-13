import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from './components/node_modules/@material-ui/core/styles';
import SignIn from './components/Signin';

import Landing from './components/Signin';
import SignUp from './components/Signup';
import Pricing from './components/Signup';


const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({history, onSignIn}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin/">
            <SignIn onSignIn={onSignIn}/>
              </Route> 
            <Route path="/auth/signup/">
            <SignUp onSignIn={onSignIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
