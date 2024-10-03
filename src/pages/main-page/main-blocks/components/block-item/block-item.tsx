import { FC } from 'react'
import styles from './block-item.module.scss'

interface Props {
    title: string
    description: string
}

export const BlockItem: FC<Props> = ({ title, description }) => {
    return (
        <div className={styles.block}>
            <p className={styles.title}>{title} </p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}
