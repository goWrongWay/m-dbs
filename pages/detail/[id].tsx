import Layout from '../../components/Layout'
import api from '../../const/api'

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
import Separator from '../../components/Separator'
import request from '../../net/request'

type Props = {
    sampleGoodsBasicInfo: GoodsBasicInformation
}
const Detial = ({ sampleGoodsBasicInfo }: Props) => {
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
                    <div>
                        <p>23</p>
                        <p>23</p>
                        <p>23</p>
                        <p>23</p>
                        <p>23</p>
                        <p>23</p>
                        <p>23</p>
                        <p>23</p>
                        <p>23</p>
                    </div>
                    <Separator
                        height="15vmin"
                        background="transparent"
                    ></Separator>
                </WingBlank>
                <AddToBagBar />
            </Layout>
        </div>
    )
}

export default Detial
export async function getStaticPaths() {
    return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const { id } = params
    if (!id) {
        return { props: {} }
    }

    try {
        let host = api.host
        let data = await request(`${host}/api/goods/basicInfo?id=${id}`)
        return {
            props: { sampleGoodsBasicInfo: data },
        }
    } catch (error) {
        console.error(error)
        return { props: {} }
    }
}
