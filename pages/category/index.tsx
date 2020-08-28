import Layout from '../../components/Layout'
import { GetStaticProps } from 'next'
import {
    Category,
    CategorySecond,
    CategoryThird,
    CategoryItem,
} from '../../interfaces'
import api from '../../const/api'
import { useMemo, useState } from 'react'
import CategoryNav from '../../components/Nav/Category'
import Separator from '../../components/Separator'
import SwipCard from '../../components/SwipCard'
import request from '../../net/request'
import ThirdListCard from '../../components/ThirdListCard'
import styles from './index.less'

type Props = {
    category: Category[]
    asideData: CategorySecond[]
    blockData: CategoryThird[]
    itemData: CategoryItem[]
}
const components: {
    [key: string]: Function
} = {
    swiper: SwipCard,
    threeList: ThirdListCard,
    default: ThirdListCard,
}

const CategoryPage = ({ category, asideData, blockData, itemData }: Props) => {
    // 选中的一级导航
    const [activeCategory, setActiveCategory] = useState(category[0])
    // 二级导航数据
    const [asideDataState, setAsideData] = useState(asideData)
    // 选中的二级导航
    const [activeAside, setActiveAside] = useState(asideDataState[0])
    // 内容块
    const [blockDataState, setBlockData] = useState(blockData)
    const getAsideData = (current: any) => {
        setAsideData(current?.children)
        setActiveAside(current?.children[0])
    }
    const getBlockData = (current: any) => {
        setBlockData(current?.children)
    }
    useMemo(() => {
        getAsideData(activeCategory)
    }, [activeCategory])
    useMemo(() => {
        activeAside && getBlockData(activeAside)
    }, [activeAside])
    return (
        <Layout title="Category" navigation>
            <CategoryNav
                handleClick={(current: any) => setActiveCategory(current)}
                active={activeCategory}
                navList={category}
            />
            <Separator />
            <section
                style={{
                    display: 'flex',
                    background: '#f1f0f0',
                    height: 'calc( 100vh - 44vmin)',
                }}
            >
                <aside className={styles.aside}>
                    <CategoryNav
                        wrapperStyle={{ height: '100%', background: '#fff' }}
                        style={{ fontSize: '3vmin' }}
                        handleClick={(current: any) => setActiveAside(current)}
                        direction={'vertical'}
                        active={activeAside}
                        navList={asideDataState}
                    />
                </aside>
                <main className={styles.main}>
                    {blockDataState?.map((item) => {
                        return (
                            <div className={styles.block} key={item.title}>
                                <p>{item.title}</p>
                                {components[item?.type || 'default']({ item })}
                            </div>
                        )
                    })}
                </main>
            </section>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        let host = api.host
        let data = await request(`${host}/api/category`)
        const getData = (data: { children: any }) => data.children
        const asideData = getData(data[0])
        const blockData = getData(data[0]['children'][0])
        return {
            props: {
                category: data,
                asideData,
                blockData,
            },
        }
    } catch (error) {
        console.error(error, 'cat')
        return {
            props: {
                category: [],
                asideData: [],
                blockData: [],
            },
        }
    }
}

export default CategoryPage
