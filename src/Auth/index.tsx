import React from 'react';

import Login from '../Login';
import SignUp from '../SignUp';

import styles from '../scss/Auth.module.scss';

const Auth: React.FC = () => {
  const [active, setActive] = React.useState('login');

  const handleChange = () => {
    setActive(active === 'login' ? 'signup' : 'login');
  };

  return (
    <div className={styles.auth}>
      <div className={styles.leftBlock}>
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/6379fb87470495.5db93fce7ba19.png" alt="img" />
      </div>
      <div className={styles.rightBlock}>
        {active === 'login' ? <Login /> : <SignUp />}
        <div className={styles.more}>
          <span>
            {active === 'login' ? (
              <>
                У вас нет аккаунта? <button onClick={handleChange}>Зарегистрироваться</button>
              </>
            ) : (
              <>
                У вас есть аккаунт? <button onClick={handleChange}>Войти</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
