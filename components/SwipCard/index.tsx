import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './index.less'
import { CategoryThird } from '../../interfaces'

type Props = {
    item: CategoryThird
}

const Swip = ({ item }: Props) => {
    return (
        //         <div style={{ overflow: 'hidden', height: '100vmin' }}>
        //     <Swiper
        //         slidesPerView="auto"
        //     className={styles.swiperWrapper}
        //     spaceBetween={6}
        //     onSlideChange={() => console.log('slide change')}
        //     onSwiper={(swiper: any) => console.log(swiper)}
        // >
        //     {imgList?.map((item, index): any => {
        //         return (
        //             <SwiperSlide
        //                 style={{ overflow: 'hidden' }}
        //         className={styles.swiperSlide}
        //         key={index}
        //         >
        //         <div style={{ overflow: 'hidden' }}>
        //         <img src={item?.src} alt="" />
        //             </div>
        //             </SwiperSlide>
        //     )
        //     })}
        //     </Swiper>
        //     </div>
        <div>
            <Swiper className={styles.swiperWrapper}>
                {item?.children?.map((inner) => {
                    return (
                        // <div key={inner.categoryId}>
                        //     {/*<p>{inner.categoryId}</p>*/}
                        //     {/*<p>{inner.title}</p>*/}
                        //     {/*<p>{inner.searchKey}</p>*/}
                        //     这里是轮播
                        // </div>
                        <SwiperSlide
                            className={styles.swiperSlide}
                            key={inner.categoryId}
                        >
                            <div style={{ overflow: 'hidden' }}>
                                <img src={inner?.img} alt="" />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default Swip
