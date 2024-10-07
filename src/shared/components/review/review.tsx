import { FC } from 'react';
import styles from './review.module.scss';

interface Props {
  name?: string;
  text?: string;
  date?: string;
}

export const Review: FC<Props> = ({ name = 'Анонимный пользователь', text, date }) => {
  return (
    <div className={styles.reviews}>
      <p className={styles.info}>{name} | {date}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};