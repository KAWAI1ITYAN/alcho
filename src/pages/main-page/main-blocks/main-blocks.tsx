import { BlockItem } from './components/block-item/block-item'
import styles from './main-blocks.module.scss'

export const MainBlock = () => {
    const blockData = [
        {
            title: 'При лечении',
            description:
                'соблюдается принцип анонимности. Вся информация конфиденциальна-спокойствие для пациентов и близких.',
        },
        {
            title: 'Только',
            description:
                'сертифицированные методики лечения, направленные на восстановление физического и психического здоровья, повышения качества жизни.',
        },
        {
            title: '97% людей',
            description:
                'навсегда отказываются от употребления при помощи наших специалистов и работающих способов лечения.',
        },
    ]

    return (
        <div className={styles.block}>
            {blockData.map((item, index) => (
                <BlockItem title={item.title} description={item.description} key={index} />
            ))}
        </div>
    )
}
