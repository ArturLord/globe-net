import React from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';

import styles from '../scss/Login.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .catch(() => {
      alert('Не правильно указана почта или пароль');
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className={styles.login}>
      <h3 className={styles.logo}>GlobeNet</h3>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
        type="email"
        placeholder="Введите email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        type="password"
        placeholder="Введите пароль"
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default Login;
