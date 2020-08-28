import Layout from '../components/Layout'
import Promotion from '../components/Promotion'
import NavigationBar from '../components/NavigationBar'
import commonStyle from '../less/common.less'

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <div className={`${commonStyle.col} ${commonStyle.center}`}>
            <Promotion></Promotion>
        </div>
        <NavigationBar navigation={'/'} />
    </Layout>
)

export default IndexPage
