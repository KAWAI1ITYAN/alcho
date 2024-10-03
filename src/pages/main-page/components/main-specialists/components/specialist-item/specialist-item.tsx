import { FC } from 'react'
import one from 'assets/img/1.svg'
import two from 'assets/img/2.svg'
import three from 'assets/img/3.svg'
import four from 'assets/img/4.svg'
import five from 'assets/img/5.svg'
import six from 'assets/img/6.svg'
import styles from './specialist-item.module.scss'

interface Props {
    fio: string
    post: string
    index: number
}

export const SpecialistItem: FC<Props> = ({ fio, post, index }) => {
    return (
        <div className={styles.block}>
            <img
                src={
                    (index + 1 === 1 && one) ||
                    (index + 1 === 2 && two) ||
                    (index + 1 === 3 && three) ||
                    (index + 1 === 4 && five) ||
                    (index + 1 === 5 && six) ||
                    ''
                }
                className={styles.pic}
                alt='photo'
            />
            <p className={styles.fio}>{fio}</p>
            <p className={styles.post}>{post}</p>
        </div>
    )
}
