import { MainCondition } from 'pages/main-page/components/main-condition/main-condition';
import { MainSpecialists } from './components/main-specialists/main-specialists';
import { MainOffer } from './components/main-offer/main-offer';
import { MainHead } from './components/main-head/main-head';
import { MainBlock } from './main-blocks/main-blocks';
import styles from './main-page.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainHead />
      <MainBlock />
      <MainOffer />
      <MainSpecialists />
      <MainCondition />
    </div>
  );
};
