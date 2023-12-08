import React from 'react';

import Suggestions from './Suggestions';
import Post from './Post';

import styles from '../scss/Timeline.module.scss';

const Timeline: React.FC = () => {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      user: 'art_x',
      postImage: 'http://pic.rutubelist.ru/video/ff/e4/ffe4195d355e6b059dd7c336592a7036.jpg',
      likes: 12,
      timestamp: '2d',
    },
    {
      id: 2,
      user: 'reddi',
      postImage:
        'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666361439_10-mykaleidoscope-ru-p-peizazhi-prirodi-krasivo-10.jpg',
      likes: 7,
      timestamp: '5h',
    },
    {
      id: 3,
      user: 'tomSoul',
      postImage:
        'https://images.wallpaperscraft.ru/image/single/gora_reka_derevia_160481_2560x1600.jpg',
      likes: 33,
      timestamp: '9h',
    },
  ]);

  return (
    <div className={styles.timeline}>
      <div className={styles.leftBlock}>
        {posts.map((obj) => (
          <Post key={obj.id} {...obj} />
        ))}
      </div>
      <div className={styles.rightBlock}>
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
