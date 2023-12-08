import React from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../redux/slices/userSlice';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';

import styles from '../scss//SignUp.module.scss';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
          if (auth.currentUser) {
            updateProfile(auth.currentUser, {
              displayName: username,
            }).then(() => {
              dispatch(loginUser({ username }));
            });
          }
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <div className={styles.signup}>
      <h3 className={styles.logo}>GlobeNet</h3>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
        type="email"
        placeholder="Введите email"
      />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Введите имя"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        type="password"
        placeholder="Введите пароль"
      />
      <button onClick={handleSignUp}>Зарегистрироваться</button>
    </div>
  );
};

export default SignUp;
