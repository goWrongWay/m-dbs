import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Search from './Search'
import commonStyle from '../less/common.less'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div className={commonStyle.w}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header></Header>
        <Search></Search>
        {children}
        <footer className={commonStyle.footer}>
            <ul className={commonStyle.footerList}>
                <li>
                    <div>
                        <p>公司信息</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>联系我们</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>支付方式</p>
                    </div>
                </li>
            </ul>
        </footer>
    </div>
)

export default Layout
