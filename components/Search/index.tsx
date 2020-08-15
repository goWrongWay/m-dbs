import styles from './index.less'
import Link from 'next/link'
import * as React from 'react'

const Search = () => {
    return (
        <div className={styles.layout}>
            <div>
                <Link href={'#'}>
                    <a href="">newIn</a>
                </Link>
                <Link href={'#'}>
                    <a href="">new 2020</a>
                </Link>
            </div>
            <div className={styles.search}>
                <input className={styles.input} type="text" />
                <Link href={'#'}>
                    <a className={styles.searchButton} href="">
                        search
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default Search
