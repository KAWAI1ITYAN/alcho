import { MainCondition } from 'pages/main-page/components/main-condition/main-condition';
import { MainSpecialists } from './components/main-specialists/main-specialists';
import { MainOffer } from './components/main-offer/main-offer';
import { MainBlock } from './main-blocks/main-blocks';
import styles from './main-page.module.scss';
import { useEffect } from 'react';
import { AboutHead } from 'pages/about-page/components/about-head/about-head';

export const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Главная';
  }, []);

  return (
    <div className={styles.container}>
      <AboutHead />
      <MainBlock />
      <MainOffer />
      <MainSpecialists />
      <MainCondition />
    </div>
  );
};
