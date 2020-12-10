import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { MainPage } from './MainPage';
import { LoginPage } from './LoginPage';
import { StartPage } from './StartPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
