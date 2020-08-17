import '../less/reset.less'
import { AppProps } from 'next/app'
import { useEffect } from 'react'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        var headHTML = document.getElementsByTagName('head')[0].innerHTML
        headHTML +=
            '<link type="text/css" preload rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">'
        document.getElementsByTagName('head')[0].innerHTML = headHTML
    })
    return <Component {...pageProps} />
}
