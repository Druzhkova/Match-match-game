import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  UserProfile, MainPage, StartPage, LoginPage,
} from './MemoryGame/components';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/loginPage" component={LoginPage} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/memory-game" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
