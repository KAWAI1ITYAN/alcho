import { useAppDispatch, useAppSelector } from 'store/store';
import { closeForm, openForm } from 'store/reviews/slice';
import { selectModal } from 'store/reviews/selectors';
import { Review } from 'shared/components/review/review';
import styles from './about-reviews.module.scss';


export const AboutReviews = () => {
  const state = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className={styles.title}>Недавние отзывы</h1>
      <div className={styles.block}>
        <Review />
        <Review />
        <Review />
      </div>
      <div className={styles.btn_block}>
        <button className={styles.btn}
                onClick={state.isOpen
                  ? () => dispatch(closeForm())
                  : () => dispatch(openForm())}>Оставить отзыв
        </button>
      </div>
    </>

  );
};


