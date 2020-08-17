// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/swiper-bundle.css';

// const swiper = new Swiper(...);

import { useLayoutEffect } from 'react'

// const Swiper: any= dynamic((): any => import('swiper/react').then(s => s.Swiper))
// const SwiperSlide= dynamic(() => import('swiper/react').then(s => s.SwiperSlide))
// dynamic(() => import('swiper/swiper.less'))
import { Swiper, SwiperSlide } from 'swiper/react'
// const swiper = new Swiper(...);
import('swiper/swiper.less')
function Home() {
    useLayoutEffect(() => {
        // var swiper = new Swiper('.swiper-container');
        // new Swiper('.swiper-container')
        var headHTML = document.getElementsByTagName('head')[0].innerHTML
        headHTML +=
            '<link type="text/css" rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">'
        document.getElementsByTagName('head')[0].innerHTML = headHTML
    })
    return (
        <div>
            {
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper: any) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                </Swiper>
            }
        </div>
    )
}

export default Home
