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
        console.log(current)
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
                    height: 'calc( 100vh - 100px)',
                }}
            >
                <aside style={{ width: '28vmin' }}>
                    <CategoryNav
                        style={{ fontSize: '3vmin' }}
                        handleClick={(current: any) => setActiveAside(current)}
                        direction={'vertical'}
                        active={activeAside}
                        navList={asideDataState}
                    />
                </aside>
                <main style={{ flex: 1, margin: '2vmin' }}>
                    {blockDataState?.map((item) => {
                        return (
                            <div
                                style={{
                                    background: '#fff',
                                    padding: '2vmin',
                                    marginBottom: '2vmin',
                                }}
                                key={item.title}
                            >
                                <p>{item.title}</p>
                                {components[item?.type || ''] ? (
                                    components[item?.type || '']({ item })
                                ) : (
                                    <div>
                                        {item?.children?.map((inner) => {
                                            return (
                                                <div key={inner.categoryId}>
                                                    <p>{inner.categoryId}</p>
                                                    <p>{inner.title}</p>
                                                    <p>{inner.searchKey}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
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
