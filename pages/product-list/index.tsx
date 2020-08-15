import Layout from '../../components/Layout'
import GoodsList from '../../components/Goods'
import { GetStaticPropsContext } from 'next'
import { Goods } from '../../interfaces'
import WingBlank from '../../components/WingBlank'

type Props = {
    a: number
    message: string
    sampleGoodsData: Goods[]
}
const ProductList = ({ a, message, sampleGoodsData }: Props) => (
    <Layout title="About | Next.js + TypeScript Example">

        <WingBlank>
            <h1>商品列表页</h1>
            <p>查询条件：</p>
            <GoodsList goods={sampleGoodsData}></GoodsList>
            <span>{a}</span>
            <span>{message}</span>
        </WingBlank>

    </Layout>
)

export default ProductList
// export const getStaticProps: GetStaticProps = async (context) => {
export async function getStaticProps(context: GetStaticPropsContext) {
    let host = 'https://dbs-shopping-mall.vercel.app/'
    if (context.preview) {
        host = 'http://localhost:3000'
    }
    let res = await fetch(`${host}/api/goods`)
    let data = await res.json()
    return {
        props: { sampleGoodsData: data },
    }
}
