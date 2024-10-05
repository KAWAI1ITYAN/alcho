import { FC } from 'react';
import styles from './review.module.scss';

interface Props {
  name?: string;
  text?: string;
}

export const Review: FC<Props> = ({ name = 'Анонимный пользователь', text }) => {
  return (
    <div className={styles.reviews}>
      <p className={styles.info}>{name} | 23 мая, 2022</p>
      <p className={styles.text}>Радион, добрый день. Вчера разговаривала с Александром.</p>
    </div>
  );
};