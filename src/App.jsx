import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  UserProfile, MainPage, StartPage, AuthorizationPage,
} from './MemoryGame/components';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/authorization" component={AuthorizationPage} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/memory-game" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
