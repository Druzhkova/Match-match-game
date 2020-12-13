import React, { useEffect } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  AuthorizationPage, UserProfile,
} from './components';

import { bootstrapStart } from './components/AuthorizationPage/actions';

export function MemoryGame() {
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
