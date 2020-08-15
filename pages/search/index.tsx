import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Tags } from '../../interfaces'
import { sampleSearchTags } from '../../utils/sample-data'
import Tag from '../../components/Tag'
import styles from './index.less'
import BackButton from '../../svgs/back.svg'
import WingBlank from '../../components/WingBlank'
import Separator from '../../components/Separator'

type Props = {
    tags: Tags[]
}

const Search = ({ tags }: Props) => {
    const router = useRouter()
    const handleClick = (item: Tags) => {
        // 添加到input框 或 直接跳转
        // router.push({pathname: '/product-list', query: {id: item.id}})
        router.push('/product-list/[id]', `/product-list/${item.label}`)
        console.log(item)
    }
    return <>
        <header className={styles.layout}>
            <a onClick={() => router.back()}><BackButton></BackButton></a>
            <input className={styles.input} type="text"/>
            <a className={styles.button}>search</a>
        </header>
        <WingBlank>
            <h2 className={styles.title}> Recent Search </h2>
            <Tag handleClick={handleClick} tags={tags}></Tag>
            <Separator height={'20px'} background={'#fff'}/>
            <h2 className={styles.title}>Hot Searched</h2>
            <Tag tags={tags}></Tag>
        </WingBlank>
    </>
}

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const tags: Tags[] = sampleSearchTags
    return { props: { tags } }
}

export default Search
