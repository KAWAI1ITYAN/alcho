import { useEffect } from 'react';
import { AboutReabilitation } from 'pages/about-page/components/about-reabilitation/about-reabilitation';
import { AboutReviewsForm } from 'pages/about-page/components/about-reviews-form/about-reviews-form';
import { AboutReviews } from 'pages/about-page/components/about-reviews/about-reviews';
import { AboutPlaces } from 'pages/about-page/components/about-places/about-places';
import { AboutHead } from 'pages/about-page/components/about-head/about-head';
import styles from './about-page.module.scss';
import { selectModal } from 'store/reviews/selectors';
import { useAppSelector } from 'store/store';

export const AboutPage = () => {
  const state = useAppSelector(selectModal);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'О нас';
  }, []);

  console.log(state);
  return (
    <div className={styles.container}>
      <AboutHead />
      <AboutReabilitation />
      <AboutPlaces />
      <AboutReviews />
      {state.isOpen && <AboutReviewsForm />}
    </div>
  );
};