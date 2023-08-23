import React from 'react';
import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router';

const LogIn = loadable(()=> import('@pages/LogIn'))
const SignUP = loadable(()=> import('@pages/SignUp'))

const App = () => {
  return(
    <Switch>
      <Redirect exact path='/' to='/login'/>
      <Route path='/login' component={LogIn}/>
      <Route path='/signup' component={SignUP}/>
    </Switch>
  )
};

export default App;
