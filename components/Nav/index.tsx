import * as React from 'react'
import Link from 'next/link'
import useURL from '../../hooks/useURL'
import styles from './index.less'
import { useEffect, useState } from 'react'

// type Props = {
//     primaryPath: string
// }

const Nav = () => {
    const navList = [
        { pathname: '/', mp: '', title: 'Home' },
        { pathname: '/about', mp: 'about', title: 'about' },
        { pathname: '/users', mp: 'users', title: 'users' },
    ]
    // 获取当前url参数中的mp，表示当前主导航，用作导航选中样式
    const [mainPath, setMainPath] = useState('')
    const { query } = useURL()
    useEffect(() => {
        setMainPath(query.mp || '')
    }, [query.mp])
    console.log(mainPath)
    return (
        <nav>
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
