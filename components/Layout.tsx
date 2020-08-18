import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import NavigationBar from './NavigationBar'
import commonStyle from '../less/common.less'

type Props = {
    children?: ReactNode
    title?: string
    back?: boolean
    navigation?: boolean
}

const Layout = ({
    children,
    title = 'This is the default title',
    back,
    navigation,
}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header back />
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
        {navigation ? <NavigationBar /> : null}
    </div>
)

export default Layout
