/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectUser, login, logout} from './features/userSlice';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import {auth} from './firebase';
import './App.css';

function App () {
  const user = useSelector (selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    auth.onAuthStateChanged (userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch (
          login ({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch (logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user
        ? <Login />
        : <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>}

    </div>
  );
}

export default App;
