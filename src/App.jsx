import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { MemoryGame } from './MemoryGame';
import {
  UserProfile, MainPage,
} from './MemoryGame/components';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MemoryGame} />
        <Route path="/user" component={UserProfile} />
        <Route path="/main" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
