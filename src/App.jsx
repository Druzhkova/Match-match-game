import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  StartPage, UserProfile, MainPage, AuthorizationPage,
} from './MemoryGame';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/authorization" component={AuthorizationPage} />
        <Route path="/login" component={UserProfile} />
        <Route path="/main" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
