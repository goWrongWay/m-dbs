import Layout from '../../components/Layout'
import GoodsList from '../../components/Goods'
import { GetStaticPropsContext } from 'next'
import { Goods } from '../../interfaces'
import api from '../../const/api'
import WingBlank from '../../components/WingBlank'
import request from '../../net/request'

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
    let host = api.host
    let data = await request(`${host}/api/goods`)
    return {
        props: { sampleGoodsData: data },
    }
}
