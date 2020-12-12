import React, { useEffect } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  UserProfile, AuthorizationPage,
} from './MemoryGame';

import { bootstrapStart } from './MemoryGame/AuthorizationPage/actions';

function App() {
  const { bootstraped, isAuthorized } = useSelector((state) => state.authorizationPage);

  const renderMainContent = () => (isAuthorized ? <UserProfile /> : <AuthorizationPage />);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapStart());
  }, [dispatch]);
  return bootstraped
    ? renderMainContent() : null;
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
