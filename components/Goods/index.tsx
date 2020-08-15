import GoodsItem from './GoodsItem'
import { Goods } from '../../interfaces'
import * as React from 'react'
import styles from './index.less'

type Props = {
    goods: Goods[],
    column?: number
}
const GoodsList = ({ goods, column = 2 }: Props) => {
    return (
        <ul className={styles.ul}>
            {goods?.map((item) => {
                return (
                    <li className={styles.li} style={{ width: `${100 / column}%` }} key={item.id}>
                        <GoodsItem data={item}></GoodsItem>
                    </li>
                )
            })}
        </ul>
    )
}
export default GoodsList
