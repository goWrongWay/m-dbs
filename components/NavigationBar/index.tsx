import styles from './index.less'
import React from 'react'

const nav = [{
    title: 'Shop',
    svg: '',
},
    {
        title: 'Category',
        svg: '',
    },
    {
        title: 'Bag',
        svg: '',
    },
    {
        title: 'Me',
        svg: '',
    }]

const Header = () => {
    return <div className={styles.wrap}>
        <ul className={styles.ul}>
            {
                nav.map(item => {
                    return <li className={styles.li} key={item.title}>
                    <span>
                        {item.title}
                    </span>
                    </li>
                })
            }
        </ul>
    </div>
}

export default Header
