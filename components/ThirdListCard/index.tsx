import styles from './index.less'
import { CategoryThird } from '../../interfaces'

type Props = {
    item: CategoryThird
}

const ThirdListCard = ({ item }: Props) => {
    return (
        <div className={styles.grid}>
            {item?.children?.map((inner) => {
                return (
                    <div className={styles.item} key={inner.categoryId}>
                        <img src={inner.img} />
                        <p className={styles.center}>{inner.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ThirdListCard
