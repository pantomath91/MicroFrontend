import React,{lazy, Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import AuthApp from './components/AuthApp';
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles';

const MarketingLazy=lazy(()=>import('./components/MarketingApp'));
const AuthLazy=lazy(()=>import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);  
  return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}></StylesProvider>
    <div>
      <Header onSignedOut={()=>{setIsSignedIn(false)}} isSignedIn={isSignedIn}/>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/auth">
          <AuthLazy onSignIn={()=>setIsSignedIn(true)}/>
        </Route>
        <Route path="/" component={MarketingLazy}/>
      </Switch>
      </Suspense>
    </div>
    </BrowserRouter>
  );
};
