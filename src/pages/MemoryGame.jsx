import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  LoginPage, UserProfile,
} from './index';

import { bootstrapStart } from './MainPage/actions';

export function MemoryGame() {
  const { bootstraped, isAuthorized } = useSelector((state) => state.authorizationPage);

  const renderMainContent = () => (isAuthorized ? <UserProfile /> : <LoginPage />);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapStart());
  }, [dispatch]);
  return bootstraped
    ? renderMainContent() : null;
}
