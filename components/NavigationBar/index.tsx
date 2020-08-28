import styles from './index.less'
import Link from 'next/link'

type Props = {
    navigation?: string
}
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
        url: '/bag',

        svg: '',
    },
    {
        title: 'Me',
        url: '/me',

        svg: '',
    },
]

const NavigationBar = ({ navigation }: Props) => {
    return (
        <div className={styles.wrap}>
            <ul className={styles.ul}>
                {nav.map((item) => {
                    return (
                        <li
                            style={{
                                color:
                                    navigation === item.url ? '#000' : 'unset',
                            }}
                            className={styles.li}
                            key={item.title}
                        >
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
