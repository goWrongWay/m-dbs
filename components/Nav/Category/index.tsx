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
    direction?: 'vertical'
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
                const act = active?.title === title
                return (
                    <p
                        className={styles.p}
                        style={Object.assign({}, style, {
                            background:
                                act && direction === 'vertical'
                                    ? '#f1f0f0'
                                    : '#fff',
                        })}
                        key={title}
                        onClick={(
                            event: React.MouseEvent<HTMLElement, MouseEvent>
                        ) => handleClick && handleClick(nav)}
                    >
                        <span
                            className={`${styles.span} ${
                                act && !direction ? styles.active : ''
                            }`}
                        >
                            {title}
                        </span>
                    </p>
                )
            })}
        </nav>
    )
}
export default CategoryNav
