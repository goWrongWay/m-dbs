import styles from './index.less'
import Nav from '../Nav'
import Search from '../../svgs/search.svg'
import Bag from '../../svgs/bag.svg'
import Link from 'next/link'

const Header = () => (
    <div className={styles.layout}>
        <Nav></Nav>
        <Link href={'/'}>
            <a href="">
                <h1>SHEOUT</h1>
            </a>
        </Link>
        <div className={styles.right}>
            <Link href={'/search'}>
                <a href="">
                    <Search />
                </a>
            </Link>
            <Link href={'/search'}>
                <a href="">
                    <Bag></Bag>
                </a>
            </Link>
        </div>
    </div>
)

export default Header
