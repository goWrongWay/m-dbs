import * as React from 'react'
import Link from 'next/link'
import useURL from '../../hooks/useURL'
import styles from './index.less'
import { useEffect, useState } from 'react'
import Open from '../../svgs/open.svg'
// type Props = {
//     primaryPath: string
// }
const navList = [
    { pathname: '/', mp: '', title: 'Home' },
    { pathname: '/women', mp: 'women', title: 'women' },
    { pathname: '/men', mp: 'men', title: 'men' },
]
const Nav = () => {
    // 获取当前url参数中的mp，表示当前主导航，用作导航选中样式
    const [mainPath, setMainPath] = useState('')
    const { query } = useURL()
    useEffect(() => {
        setMainPath(query.mp || '')
    }, [query.mp])
    return (
        <nav className={styles.nav}>
            <Open></Open>
            {navList.map((nav) => {
                const { pathname, mp, title } = nav
                return (
                    <Link
                        href={{ pathname: pathname, query: { mp: mp } }}
                        key={pathname}
                    >
                        <a className={mp === mainPath ? styles.active : ''}>
                            {title}
                        </a>
                    </Link>
                )
            })}

            <a href="/api/users">Users API</a>
        </nav>
    )
}
export default Nav
