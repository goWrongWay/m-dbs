import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './index.less'
import { ImgList } from '../../interfaces'

type Props = {
    imgList: ImgList[]
}

const Swip = ({ imgList }: Props) => {
    return (
        <div style={{ overflow: 'hidden', height: '100vmin' }}>
            <Swiper
                slidesPerView="auto"
                className={styles.swiperWrapper}
                onLazyImageReady={() => 'loading1111'}
                lazy={true}
                spaceBetween={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
            >
                {imgList.map((item, index): any => {
                    return (
                        <SwiperSlide
                            style={{ overflow: 'hidden' }}
                            className={styles.swiperSlide}
                            key={index}
                        >
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    style={{ width: '70vmin' }}
                                    src={item?.src}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default Swip
