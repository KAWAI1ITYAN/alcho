import { offerData } from './components/offer-item/mokData';
import { OfferItem } from './components/offer-item/offer-item';
import styles from './main-offer.module.scss';

export const MainOffer = () => {

  return (
    <div className={styles.block}>
      <h1>Мы предлагаем</h1>
      <p>ИНДИВИДУАЛЬНЫЙ ПОДБОР ПРОГРАММЫ ЛЕЧЕНИЯ</p>

      <div className={styles.block_items}>
        {offerData.map((item, index) => (
          <OfferItem
            title={item.title}
            desc={item.desc}
            key={index}
            status={index % 2 != 0}
          />
        ))}
      </div>
    </div>
  );
};
