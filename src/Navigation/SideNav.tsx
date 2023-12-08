import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

import { logoutUser } from '../redux/slices/userSlice';
import { RootState } from '../redux/store';

import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';

import styles from '../scss/SideNav.module.scss';

const SideNav: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  return (
    <div className={styles.sideNav}>
      <h2 className={styles.logo}>GlobeNet</h2>
      <div className={styles.buttons}>
        <button className={styles.btn}>
          <HomeIcon />
          <span>Главная</span>
        </button>

        <button className={styles.btn}>
          <SearchIcon />
          <span>Поиск</span>
        </button>

        <button className={styles.btn}>
          <SlideshowIcon />
          <span>Видео</span>
        </button>

        <button className={styles.btn}>
          <ChatIcon />
          <span>Сообщения</span>
        </button>

        <button className={styles.btn}>
          <FavoriteBorderIcon />
          <span>Уведомления</span>
        </button>

        <button className={styles.btn}>
          <AddCircleOutlineIcon />
          <span>Публикация</span>
        </button>

        <button className={styles.btn}>
          <ExploreIcon />
          <span>Настройки</span>
        </button>

        <button className={styles.btn}>
          <Avatar>{user?.username ? user.username.charAt(0).toUpperCase() : 'A'}</Avatar>
          <span>
            {user?.username}
            <button className={styles.logout} onClick={handleLogout}>
              Выйти
            </button>
          </span>
        </button>
      </div>
      <div className={styles.more}>
        <button className={styles.btn}>
          <MenuIcon />
          <span>Меню</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
