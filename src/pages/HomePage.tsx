import React from 'react';

import SideNav from '../Navigation/SideNav';
import Timeline from '../Timeline/Timeline';

import styles from '../scss/HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.sideNav}>
        <SideNav />
      </div>
      <div className={styles.timeline}>
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;
