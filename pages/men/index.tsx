import Link from 'next/link'
import Layout from '../../components/Layout'
import useURL from '../../hooks/useURL'

const MenPage = () => {
    const { query } = useURL()

    return (
        <Layout title="About | Next.js + TypeScript Example">
            <h1>男装</h1>
            <p>男装活动页</p>
            <p>
                <Link href={{ pathname: '/product-list', query: query }}>
                    <a>进入男装列表页</a>
                </Link>
            </p>
        </Layout>
    )
}

export default MenPage
