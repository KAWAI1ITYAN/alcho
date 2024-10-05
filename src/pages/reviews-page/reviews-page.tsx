import { useEffect } from 'react';
import { useAppSelector } from 'store/store';
import { Review } from 'shared/components/review/review';
import { selectModal } from 'store/reviews/selectors';
import styles from './reviews-page.module.scss';

export const ReviewsPage = () => {
  const state = useAppSelector(selectModal);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Отзывы';
  }, []);

  return (
    <div className={styles.container}>
      {state.reviews.length !== 0 && <>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </>
      }

      {!state.reviews.length
        && <p className={styles.no_reviews}>Отзывов пока что нет</p>}
    </div>
  );
};