import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Admin from './Routers/AdminRouters/Admin';
import CustomerRouters from './Routers/CustomerRouters/CustomerRouters';
import AuthTabs from './Admin/Pages/Auth/AuthTab';
import { getUser } from './Redux/Auth/Action';

const App = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (jwt && !auth.user) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch, auth.user]);

  return (
    <>
      {!auth.user ? (
        <AuthTabs />
      ) : auth.user.role === 'admin' ? (
        <Admin user={auth.user}/>
      ) : (
        <CustomerRouters />
      )}
    </>
  );
};

export default App;
