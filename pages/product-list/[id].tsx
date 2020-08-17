import { GetStaticProps, GetStaticPaths } from 'next'

import { Tags, Goods } from '../../interfaces'
import { sampleGoodsData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import GoodsList from '../../components/Goods'
import WingBlank from '../../components/WingBlank'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {
    sampleGoodsData: Goods[]
    title: string
    errors?: string
}

const StaticPropsDetail = ({ sampleGoodsData, title, errors }: Props) => {
    const router = useRouter()
    const handleClick = (item: Goods) => {
        // router.push({pathname: '/product-list', query: {id: item.id}})
        console.log(item)
        router.push('/detail/[id]', `/detail/${item.title}`)
    }
    useEffect(() => {
        console.log(23)
    })

    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript Example">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    return (
        <Layout title={'User Detail'}>
            <WingBlank>
                <b>{title}</b>
                <GoodsList
                    handleClick={handleClick}
                    goods={sampleGoodsData}
                ></GoodsList>
            </WingBlank>
        </Layout>
    )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    let host = 'https://m-dbs.vercel.app'

    // host = 'http://localhost:3000';
    let res = await fetch(`${host}/api/searchTags`)
    let data = await res.json()
    const paths = data.map((tag: Tags) => ({
        params: { id: tag.label },
    }))
    return { paths, fallback: true }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const title = params?.id
        const item = sampleGoodsData.filter((data) => data.title === title)
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { sampleGoodsData: item, title } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}
