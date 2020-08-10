import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.less'

// type Props = {
//     primaryPath: string
// }

const List = () => {
    const navList = [
        { pathname: '/', mp: '', title: 'Home' },
        { pathname: '/about', mp: 'about', title: 'about' },
        { pathname: '/users', mp: 'users', title: 'users' },
    ]
    const router = useRouter()
    // const mp = router.query.mp
    console.log(router)
    return (
        <nav>
            {navList.map((nav) => {
                const { pathname, mp, title } = nav
                return (
                    <Link
                        href={{ pathname: pathname, query: { mp: mp } }}
                        key={pathname}
                    >
                        <a className={styles.active}>{title}</a>
                    </Link>
                )
            })}

            <a href="/api/users">Users API</a>
        </nav>
    )
}
export default List
