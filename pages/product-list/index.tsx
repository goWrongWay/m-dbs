import Layout from '../../components/Layout'
import GoodsList from '../../components/GoodsList'
import { GetStaticPropsContext } from 'next'

type Props = {
    a: number
    message: string
}
const ProductList = ({ a, message }: Props) => (
    <Layout title="About | Next.js + TypeScript Example">
        <h1>商品列表页</h1>
        <p>查询条件：</p>
        <GoodsList></GoodsList>
        <span>{a}</span>
        <span>{message}</span>
    </Layout>
)

export default ProductList
// export const getStaticProps: GetStaticProps = async (context) => {
export async function getStaticProps(context: GetStaticPropsContext) {
    // If you request this page with the preview mode cookies set:
    //
    // - context.preview will be true
    // - context.previewData will be the same as
    //   the argument used for `setPreviewData`.
    // let res = await fetch(`http://localhost:3000/api/${context.preview ? 'preview' : ''}`)
    // let data = await res.json();
    return {
        props: { ...context.previewData },
    }
}
