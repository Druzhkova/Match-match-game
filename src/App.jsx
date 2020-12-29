import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  UserProfile, MainPage, StartPage, LoginPage, NotFoundPage,
} from './MemoryGame/components';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/loginPage" component={LoginPage} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exact path="/memory-game" component={MainPage} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
