import React, { ReactNode } from 'react'
import Head from 'next/head'
import Nav from './Nav'
type Props = {
    children?: ReactNode
    title?: string
    mp?: string
}

const Layout = ({
    children,
    title = 'This is the default title',
    mp,
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
        <header>
            <Nav mp={mp} />
        </header>
        {children}
        <footer>
            <hr />

            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout
