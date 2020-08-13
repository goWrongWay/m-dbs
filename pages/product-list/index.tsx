import Layout from '../../components/Layout'
import GoodsList from '../../components/Goods'
import { GetStaticPropsContext } from 'next'
import { Goods } from '../../interfaces'

type Props = {
    a: number
    message: string
    sampleGoodsData: Goods[]
}
const ProductList = ({ a, message, sampleGoodsData }: Props) => (
    <Layout title="About | Next.js + TypeScript Example">
        <h1>商品列表页</h1>
        <p>查询条件：</p>
        <GoodsList goods={sampleGoodsData}></GoodsList>
        <span>{a}</span>
        <span>{message}</span>
    </Layout>
)

export default ProductList
// export const getStaticProps: GetStaticProps = async (context) => {
export async function getStaticProps(context: GetStaticPropsContext) {
    let res = await fetch(`http://localhost:3000/api/goods`)
    let data = await res.json()
    console.log(data, 33)
    return {
        props: { sampleGoodsData: data },
    }
}
