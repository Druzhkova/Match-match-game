import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
import {
  MemoryGame,
} from './MemoryGame';

function App() {
  return <MemoryGame />;
  // <div>
  //   <Switch>
  //     <Route exact path="/" component={StartPage} />
  //     <Route path="/authorization" component={AuthorizationPage} />
  //     <Route path="/login" component={UserProfile} />
  //     <Route path="/main" component={MainPage} />
  //     <Redirect to="/" />
  //   </Switch>
  // </div>
}

export default App;
