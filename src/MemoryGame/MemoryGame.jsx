import React, { useEffect } from 'react';
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
}
