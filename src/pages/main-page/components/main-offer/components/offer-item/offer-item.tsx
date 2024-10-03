import { FC } from 'react'
import triangle from 'assets/img/triangle.svg'
import styles from './offer-item.module.scss'
import cn from 'classnames'

interface Props {
    title: string
    desc: string
    status?: boolean
}

export const OfferItem: FC<Props> = ({ title, desc, status }) => {
    return (
        <div
            className={cn('', {
                [styles.block]: status,
            })}
        >
            <div className={styles.block_text}>
                <img src={triangle} />
                <div className={styles.txt}>
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
