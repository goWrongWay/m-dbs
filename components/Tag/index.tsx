import * as React from 'react'
import { Tags } from '../../interfaces'
import styles from './index.less'
import Fire from '../../svgs/fire.svg'

type Props = {
    tags: Tags[],
    handleClick?: any
}

const Tag = ({ tags, handleClick }: Props) => (
    <ul className={styles.ul}>
        {tags?.map((item, index) => (
            <li onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>)  => handleClick && handleClick(item)} className={styles.li} key={item.id}>
                {item.img ? <img width={30} height={40} src={item.img}/> : null}
                {index < 3 ? <Fire></Fire> : null}
                <span className={styles.label}>{item.label}</span>
            </li>
        ))}
    </ul>
)

export default Tag
