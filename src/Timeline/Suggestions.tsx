import React from 'react';

import { Avatar } from '@mui/material';

import styles from '../scss/Suggestions.module.scss';

const Suggestions: React.FC = () => {
  return (
    <div className={styles.suggestions}>
      <div className={styles.title}>Предложения для вас</div>
      <div className={styles.userNames}>
        <div className={styles.userName}>
          <div className={styles.userNameLeft}>
            <span className={styles.avatar}>
              <Avatar>A</Avatar>
            </span>
            <div className={styles.info}>
              <span className={styles.user}>avg_fx</span>
              <span className={styles.relation}>Новый пользователь</span>
            </div>
          </div>
          <button className={styles.followBtn}>Подписаться</button>
        </div>

        <div className={styles.userName}>
          <div className={styles.userNameLeft}>
            <span className={styles.avatar}>
              <Avatar>A</Avatar>
            </span>
            <div className={styles.info}>
              <span className={styles.user}>ann_miss</span>
              <span className={styles.relation}>Новый пользователь</span>
            </div>
          </div>
          <button className={styles.followBtn}>Подписаться</button>
        </div>

        <div className={styles.userName}>
          <div className={styles.userNameLeft}>
            <span className={styles.avatar}>
              <Avatar>R</Avatar>
            </span>
            <div className={styles.info}>
              <span className={styles.user}>reddy</span>
              <span className={styles.relation}>Новый пользователь</span>
            </div>
          </div>
          <button className={styles.followBtn}>Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
