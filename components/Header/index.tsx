import styles from './index.less'
import Nav from '../Nav'
import Search from '../../svgs/search.svg'
import Bag from '../../svgs/bag.svg'
import Link from 'next/link'
import BackButton from '../../svgs/back.svg'
import { useRouter } from 'next/router'

const Header = ({ back }: { back: boolean }) => {
    const router = useRouter()
    return (
        <div className={styles.layout}>
            <div className={styles.left}>
                {back ? (
                    <a onClick={() => router.back()}>
                        <BackButton></BackButton>
                    </a>
                ) : null}
                <Nav></Nav>
            </div>

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
}

export default Header
