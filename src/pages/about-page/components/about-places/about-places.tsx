import first from 'assets/img/1_house.svg';
import second from 'assets/img/2_house.svg';
import third from 'assets/img/3_house.svg';
import fourth from 'assets/img/4_house.svg';
import fifth from 'assets/img/5_house.svg';
import sixth from 'assets/img/6_house.svg';
import styles from './about-places.module.scss';

export const AboutPlaces = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>ПРЕДОСТАВЛЕНИЕ ЛУЧШЕГО МЕСТА ЛЕЧЕНИЯ</h1>

      <div>
        <div className={styles.scroll}>
          <img src={second} alt={'second'} />
          <img src={third} alt={'third'} />
          <img src={fourth} alt={'fourth'} />
          <img src={fifth} alt={'fifth'} />
          <img src={sixth} alt={'sixth'} />
        </div>
      </div>

      <p className={styles.text}>Мы подбираем самое выгодное и удобное место для проведения лечения зависимости только
        после изучения всех особенностей резидента и пожеланий родственников.</p>
    </div>
  );
};