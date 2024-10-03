import { dokData } from './components/mokData'
import { SpecialistItem } from './components/specialist-item/specialist-item'
import styles from './main-specialists.module.scss'

export const MainSpecialists = () => {
    return (
        <div className={styles.specs}>
            <h1>Наши специалисты</h1>

            <div className={styles.block}>
                {dokData.map((item, index) => (
                    <SpecialistItem fio={item.fio} post={item.post} index={index} key={index} />
                ))}
            </div>
        </div>
    )
}
