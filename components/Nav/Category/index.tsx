import * as React from 'react'
import styles from './index.less'
import {
    Category,
    CategoryItem,
    CategorySecond,
    CategoryThird,
} from '../../../interfaces'

type Props = {
    navList: { title: string }[]
    direction?: string
    handleClick?: any
    active?: Category | CategorySecond | CategoryThird | CategoryItem
    style?: any
}

const CategoryNav = ({
    navList,
    direction,
    handleClick,
    active,
    style,
}: Props) => {
    // 获取当前url参数中的mp，表示当前主导航，用作导航选中样式
    return (
        <nav
            className={`${styles.nav} ${
                direction === 'vertical' ? styles.vertical : ''
            }`}
        >
            {navList?.map((nav) => {
                const { title } = nav
                return (
                    <p
                        className={styles.p}
                        style={Object.assign({}, style, {
                            background:
                                active?.title === title ? '#f1f0f0' : '#fff',
                        })}
                        key={title}
                        onClick={(
                            event: React.MouseEvent<HTMLElement, MouseEvent>
                        ) => handleClick && handleClick(nav)}
                    >
                        {title}
                    </p>
                )
            })}
        </nav>
    )
}
export default CategoryNav
