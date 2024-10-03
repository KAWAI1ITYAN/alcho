import styles from './main-head.module.scss'

export const MainHead = () => {
    return (
        <section className={styles.section}>
            <div className={styles.title_block}>
                <p className={styles.title}>
                    ЛЕЧЕНИЕ НАРКОМАНИИ И<br /> АЛКОГОЛИЗМА
                </p>
                <p className={styles.desc}>
                    РАБОТАЮЩИЕ МЕТОДИКИ ЛЕЧЕНИЯ <br />
                    ЗАВИСИМОСТИ
                </p>
            </div>
            <form className={styles.form}>
                <p className={styles.text}>
                    Оставьте свой номер телефона, чтобы с вами связались наши специалисты
                </p>
                <input placeholder='Имя' />
                <input placeholder='Номер телефона' />
                <button className={styles.btn}>Отправить</button>
            </form>
        </section>
    )
}
