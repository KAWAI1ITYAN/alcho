import styles from './main-condition.module.scss';

export const MainCondition = () => {

  const conditionData = [
    'Комфортные женские и мужские комнаты',
    'Ванные и душевые комнаты',
    'Спортзал',
    'Площадка для спортивных и групповых занятийна улице',
    'Четырехразовое питание, согласно назначенной диете',
    'Комната отдыха с настольными играми',
    'Комната для индивидуальных занятий с психологом',
    'Зал для групповых занятий',
    'Массажный кабинет',
    'Занятия йогой'
  ];

  const valuesData = [
    'Просветительская и научная работа',
    'Сбор статистики эффективности',
    'Лучшие клиники',
    'Ведущие специалисты',
    'Ценность каждого обращения',
    'Профессионализм и эффективность',
    'Надёжность и работоспособность',
    'Человеческая жизнь',
    'Спокойствие родных'
  ];

  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <div className={styles.yellow} />
        <div className={styles.purple} />
      </div>
      <div className={styles.data}>
        <div className={styles.conditions}>
          <h1>УСЛОВИЯ НАШЕГО ЦЕНТРА</h1>
          {conditionData.map((item, index) => <p key={index} className={styles.text}>{`>`} {item}</p>)}
        </div>
        <div className={styles.values}>
          <h1>ЧТО МЫ ЦЕНИМ</h1>
          {valuesData.map((item, index) => <p key={index} className={styles.text}>{`<`} {item}</p>)}
        </div>
      </div>
    </div>
  );
};