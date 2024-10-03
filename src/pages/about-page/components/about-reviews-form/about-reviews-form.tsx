import styles from './about-reviews-form.module.scss';
import closeI from 'assets/img/close.svg';

export const AboutReviewsForm = () => {
  return (
    <div className={styles.block}>
      <div className={styles.head}>
        <div />
        <img src={closeI} className={styles.close} alt={'close'} />
      </div>
      <h1 className={styles.title}>Оставить отзыв</h1>
      <form className={styles.form}>
        <input placeholder={'Имя'} className={styles.input} />
        <textarea placeholder={'Отзыв'} className={styles.textarea} />
        <button className={styles.btn}>Добавить</button>
      </form>
    </div>
  );
};