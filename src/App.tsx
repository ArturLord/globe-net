import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from './firebase';

import { loginUser, setLoading } from './redux/slices/userSlice';
import { RootState } from './redux/store';

import HomePage from './pages/HomePage';
import Auth from './Auth';

import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          }),
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log('User is not logged in.');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { user, isLoading } = useSelector((state: RootState) => state.user);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <HomePage /> : <Auth />}</>
      )}
    </div>
  );
};

export default App;
