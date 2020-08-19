import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from './index.less'
import { GoodsBasicInformation } from '../../../interfaces'

type Props = {
    title?: string
    basicInfomation: GoodsBasicInformation
}
const BasicInformation = ({ title, basicInfomation }: Props) => {
    const router = useRouter()
    const [selected, setSelected] = useState('')
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{router.query.id}</div>
            <div className={styles.price}>{basicInfomation.price}</div>
            <div
                className={styles.size}
                style={{ paddingBottom: selected ? '10vmin' : 0 }}
            >
                <p>size(US)</p>
                <ul className={styles.ul}>
                    {basicInfomation.size.map((item) => {
                        return (
                            <React.Fragment key={item.title}>
                                <li
                                    onClick={() => setSelected(item.title)}
                                    style={{
                                        border:
                                            selected === item.title
                                                ? '1px solid #333'
                                                : '1px solid transparent',
                                    }}
                                    className={styles.li}
                                >
                                    {item.title}
                                </li>
                                <span
                                    className={styles.desc}
                                    style={{
                                        display:
                                            selected === item.title
                                                ? 'block'
                                                : 'none',
                                    }}
                                >
                                    {item.desc}
                                </span>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default BasicInformation
