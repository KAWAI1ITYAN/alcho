import styles from './about-reviews-form.module.scss';
import closeI from 'assets/img/close.svg';
import { closeForm } from 'store/reviews/slice';
import { useAppDispatch } from 'store/store';
import { ChangeEvent, useState, FormEvent } from 'react';
import { useCreateReviewMutation } from 'store/reviews/api';

interface FormData {
  name: string;
  text: string;
}

const initialState = {
  name: '',
  text: ''
};

export const AboutReviewsForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>(initialState);

  const [createReview, { isLoading, isSuccess, error }] = useCreateReviewMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createReview(formData).unwrap();
      setFormData(initialState);
    } catch (err) {
      console.error('Failed to submit the review', err);
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.head}>
        <div />
        <img
          src={closeI}
          onClick={() => dispatch(closeForm())}
          className={styles.close}
          alt={'close'}
        />
      </div>
      <h1 className={styles.title}>Оставить отзыв</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder={'Имя'}
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="text"
          placeholder={'Отзыв'}
          value={formData.text}
          onChange={handleChange}
          className={styles.textarea}
        />
        <button type="submit" className={styles.btn} disabled={isLoading}>
          {isLoading ? 'Добавление...' : 'Добавить'}
        </button>
      </form>

      {isSuccess && <p>Отзыв успешно отправлен!</p>}
      {error && <p>Ошибка отправки отзыва. Попробуйте позже.</p>}
    </div>
  );
};
