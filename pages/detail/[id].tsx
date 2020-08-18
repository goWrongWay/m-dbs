import Layout from '../../components/Layout'
// import Swip from '../../components/Swip'
// import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// const Swip = dynamic(() => import('../../components/Swip'), {
//     loading: () => <p>loading img</p>,
// })
import Swip from '../../components/Swip'
import AddToBagBar from '../../components/AddToBagBar'
import { useRouter } from 'next/router'

function Home() {
    const [arr, setArr]: any = useState([])
    const router = useRouter()

    useEffect(() => {
        setArr(() => {
            return [
                {
                    src:
                        '//img.ltwebstatic.com/images3_pi/2020/08/05/1596622309e2abeb2a1f4a15f447944a69fedc4c01_thumbnail_750x.webp',
                },
                {
                    src:
                        '//img.ltwebstatic.com/images3_pi/2020/08/05/15966223137aa2c4432d14647633a20ba03900b2d5_thumbnail_750x.webp',
                },
                {
                    src:
                        '//img.ltwebstatic.com/images3_pi/2020/08/05/1596622317d48b3c8fc1d81be443d0d910f41e5e5b_thumbnail_750x.webp',
                },
                {
                    src:
                        '//img.ltwebstatic.com/images3_pi/2020/08/05/1596622321e068ab8204b4d3e6d2a0432e412b0c9f_thumbnail_750x.webp',
                },
                {
                    src:
                        '//img.ltwebstatic.com/images3_pi/2020/08/05/15966223137aa2c4432d14647633a20ba03900b2d5_thumbnail_750x.webp',
                },
                {
                    src:
                        '//img.ltwebstatic.com/images3_pi/2020/08/05/15966223137aa2c4432d14647633a20ba03900b2d5_thumbnail_750x.webp',
                },
            ]
        })
    }, [])
    return (
        <div>
            <Layout back navigation={false}>
                <Swip imgList={arr} />
                <p>{router.query.id}</p>
                <AddToBagBar />
            </Layout>
        </div>
    )
}

export default Home
