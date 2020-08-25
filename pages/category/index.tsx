import Layout from '../../components/Layout'
import { GetStaticProps } from 'next'
import {
    Category,
    CategorySecond,
    CategoryThird,
    CategoryItem,
} from '../../interfaces'
import api from '../../const/api'
import NavigationBar from '../../components/NavigationBar'
import { useMemo, useState } from 'react'
import CategoryNav from '../../components/Nav/Category'

type Props = {
    category: Category[]
    asideData: CategorySecond[]
    blockData: CategoryThird[]
    itemData: CategoryItem[]
}

const CategoryPage = ({ category, asideData, blockData, itemData }: Props) => {
    const [activeCategory, setActiveCategory] = useState(category[0])
    const [asideDataState, setAsideData] = useState(asideData)
    const [activeAside, setActiveAside] = useState(asideDataState[0])
    const [blockDataState, setBlockData] = useState(blockData)
    // const [activeBlock, setActivBlock] = useState(blockDataState[0])

    const getAsideData = (current: any) => {
        setAsideData(current.children)
        setActiveAside(current.children[0])
    }
    const getBlockData = (current: any) => {
        setBlockData(current.children)
    }
    useMemo(() => {
        getAsideData(activeCategory)
    }, [activeCategory])
    useMemo(() => {
        getBlockData(activeAside)
    }, [activeAside])
    return (
        <Layout title="About | Next.js + TypeScript Example">
            <CategoryNav
                style={{ fontSize: '4vmin' }}
                handleClick={(current: any) => setActiveCategory(current)}
                active={activeCategory}
                navList={category}
            />
            <section style={{ display: 'flex', background: '#f1f0f0' }}>
                <aside style={{ width: '20vmin' }}>
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
                                    padding: '10px',
                                    marginTop: '10px',
                                }}
                                key={item.title}
                            >
                                <p>{item.title}</p>
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
                            </div>
                        )
                    })}
                </main>
            </section>

            <NavigationBar />
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        let host = api.host
        let res = await fetch(`${host}/api/category`)
        let data = await res.json()
        const getData = (data: { children: any }) => data.children
        return {
            props: {
                category: data,
                asideData: getData(data[0]),
                blockData: getData(data[0]['children'][0]),
            },
        }
    } catch (error) {
        console.error(error)
        return { props: {} }
    }
}

export default CategoryPage
