import Layout from '../components/Layout'
import Promotion from '../components/Promotion'
import commonStyle from '../less/common.less'
const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <div className={`${commonStyle.col} ${commonStyle.center}`}>
            <Promotion></Promotion>
        </div>
    </Layout>
)

export default IndexPage
