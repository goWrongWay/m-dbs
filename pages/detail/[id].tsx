import Layout from '../../components/Layout'
// import Swip from '../../components/Swip'
// import dynamic from 'next/dynamic'
// const Swip = dynamic(() => import('../../components/Swip'), {
//     loading: () => <p>loading img</p>,
// })
import Swip from '../../components/Swip'
import AddToBagBar from '../../components/AddToBagBar'
// import { useRouter } from 'next/router'
import WingBlank from '../../components/WingBlank'
import BasicInformation from '../../components/Goods/BasicInformation'
import { GetStaticProps } from 'next'
import { GoodsBasicInformation } from '../../interfaces'

type Props = {
    sampleGoodsBasicInfo: GoodsBasicInformation
}
const Home = ({ sampleGoodsBasicInfo }: Props) => {
    return (
        <div>
            <Layout back navigation={false}>
                <Swip imgList={sampleGoodsBasicInfo?.imgs} />
                <WingBlank>
                    {sampleGoodsBasicInfo ? (
                        <BasicInformation
                            basicInfomation={sampleGoodsBasicInfo}
                        />
                    ) : (
                        'loading'
                    )}
                </WingBlank>
                <AddToBagBar />
            </Layout>
        </div>
    )
}

export default Home
export async function getStaticPaths() {
    return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const { id } = params
    if (!id) {
        return { props: {} }
    }

    try {
        let host = 'https://m-dbs.vercel.app'
        //     host = 'http://localhost:3000'
        let res = await fetch(`${host}/api/goods/basicInfo?id=${id}`)
        let data = await res.json()
        return {
            props: { sampleGoodsBasicInfo: data },
        }
    } catch (error) {
        // The Twitter API most likely died
        console.error(error)
        return { props: {} }
    }
}
