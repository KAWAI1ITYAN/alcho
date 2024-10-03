import { useState } from 'react';
import { AboutReabilitation } from 'pages/about-page/components/about-reabilitation/about-reabilitation';
import { AboutReviewsForm } from 'pages/about-page/components/about-reviews-form/about-reviews-form';
import { AboutReviews } from 'pages/about-page/components/about-reviews/about-reviews';
import { AboutPlaces } from 'pages/about-page/components/about-places/about-places';
import { AboutHead } from 'pages/about-page/components/about-head/about-head';
import styles from './about-page.module.scss';

export const AboutPage = () => {
  const [status, setStatus] = useState<boolean>(true);
  return (
    <div className={styles.container}>
      <AboutHead />
      <AboutReabilitation />
      <AboutPlaces />
      <AboutReviews />
      {status && <AboutReviewsForm />}
    </div>
  );
};