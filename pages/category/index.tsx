import Layout from '../../components/Layout'
import { GetStaticProps } from 'next'
import { Category } from '../../interfaces'
// import api from '../../const/api'
import NavigationBar from '../../components/NavigationBar'

type Props = {
    category: Category[]
}

const CategoryPage = ({ category }: Props) => {
    return (
        <Layout title="About | Next.js + TypeScript Example">
            {category?.map((item) => {
                return <p>{item.title}</p>
            })}
            <NavigationBar />
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // try {
    //     let host = api.host
    //     let res = await fetch(`${host}/api/category`)
    //     let data = await res.json()
    //     return {
    //         props: { category: data },
    //     }
    // } catch (error) {
    //     console.error(error)
    //     return { props: {} }
    // }
    return { props: {} }
}

export default CategoryPage
