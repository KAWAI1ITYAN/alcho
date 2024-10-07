import { useEffect } from 'react';
import { Review } from 'shared/components/review/review';
import { useGetViewsQuery } from 'store/reviews/api';
import styles from './reviews-page.module.scss';

export const ReviewsPage = () => {
  const { data } = useGetViewsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Отзывы';
  }, []);

  return (
    <div className={styles.container}>

      <h1 className={styles.reviews}>Отзывы</h1>
      {data?.length !== 0
        && <>
          {data?.map((item) => <Review text={item.text} name={item.name} date={item.date} key={item.id} />)}
        </>
      }

      {!data?.length
        && <p className={styles.no_reviews}>Отзывов пока что нет</p>}
    </div>
  );
};