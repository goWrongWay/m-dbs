import GoodsItem from './GoodsItem'
import { Goods } from '../../interfaces'
import * as React from 'react'
import styles from './index.less'

type Props = {
    goods: Goods[]
}
const GoodsList = ({ goods }: Props) => {
    return (
        <ul className={styles.ul}>
            {goods?.map((item) => {
                return (
                    <li className={styles.li} key={item.id}>
                        <GoodsItem data={item}></GoodsItem>
                    </li>
                )
            })}
        </ul>
    )
}
export default GoodsList
