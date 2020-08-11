import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = (props: any) => (
    <Layout mp={props.mp} title="About | Next.js + TypeScript Example">
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)

export default AboutPage

export async function getStaticProps() {
    return {
        props: { mp: 'about' }, // will be passed to the page component as props
    }
}
