import React from 'react';

import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import styles from '../scss/Post.module.scss';

type PostProps = {
  user: string;
  postImage: string;
  likes: number;
  timestamp: string;
}

const Post:React.FC<PostProps> = ({user, postImage, likes, timestamp}) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.postHeaderAuthor}>
          <Avatar className={styles.avatar}>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon className={styles.postHeaderImg} />
      </div>
      <div className={styles.postImg}>
        <img
          src={postImage}
          alt="post"
        />
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postIcons}>
          <div className={styles.iconsMain}>
            <FavoriteBorderIcon className={styles.postIcon} />
            <ChatBubbleOutlineIcon className={styles.postIcon} />
            <TelegramIcon className={styles.postIcon} />
          </div>
          <div className={styles.iconSave}>
            <BookmarkBorderIcon className={styles.postIcon} />
          </div>
        </div>
        Оценило {likes} человек.
      </div>
    </div>
  );
};

export default Post;
