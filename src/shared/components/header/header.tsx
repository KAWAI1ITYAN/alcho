import Logo from 'assets/img/main-logo.svg';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = () => {
  const headerNav = [
    { to: '/', name: 'Главная' },
    { to: '/about', name: 'О нас' },
    { to: '/reviews', name: 'Отзывы' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header_text}>
        <Link to='/' className={styles.logo}>
          <img src={Logo} alt='logo' />
          <p className={styles.name}>РОЖДЕНИЕ</p>
        </Link>

        <div className={styles.links}>
          {headerNav.map((item, index) => (
            <Link to={item.to} key={index} className={styles.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
