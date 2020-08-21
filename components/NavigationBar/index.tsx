import styles from './index.less'
import React from 'react'
import Link from 'next/link'

const nav = [
    {
        title: 'Shop',
        url: '/',

        svg: '',
    },
    {
        title: 'Category',
        url: '/category',
        svg: '',
    },
    {
        title: 'Bag',
        url: '/',

        svg: '',
    },
    {
        title: 'Me',
        url: '/',

        svg: '',
    },
]

const NavigationBar = () => {
    return (
        <div className={styles.wrap}>
            <ul className={styles.ul}>
                {nav.map((item) => {
                    return (
                        <li className={styles.li} key={item.title}>
                            <Link href={item.url}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavigationBar
