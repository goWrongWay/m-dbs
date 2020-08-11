import Link from 'next/link'
import styles from './index.less'
const Promotion = () => {
    return (
        <>
            <div className={styles.section1}>
                <img
                    className={styles.img}
                    src="https://static.hm.com.cn/media/tool/template/images/a/u/autumn_new_in.jpeg"
                    alt="promotion"
                />
                <div className={styles.center}>
                    <div className={styles.title}>初秋新格调 - 低至5折</div>
                    <div className={styles.subTitle}>
                        此优惠仅限dbs指定商品, 截至2021年8月19日。
                    </div>
                    <div className={styles.linkButton}>
                        <Link href="/women">
                            <a>women</a>
                        </Link>
                        <Link href="/men">
                            <a>men</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.section1}>
                <img
                    className={styles.img}
                    src="https://static.hm.com.cn/media/tool/template/images/l/a/ladies-dress-teaser-pc_.jpg"
                />
                <div className={styles.bottom}>
                    <div className={styles.subTitle}>你的挚爱造型</div>
                    <div className={styles.title}>连衣裙时尚周</div>
                    <div className={styles.button}>
                        <Link href="/women">
                            <a>即刻选购</a>
                        </Link>
                        {/*<Link href="/women">*/}
                        {/*    <a>women</a>*/}
                        {/*</Link>*/}
                        {/*<Link href="/men">*/}
                        {/*    <a>men</a>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
            <div className={styles.section1}>
                <img
                    className={styles.img}
                    src="https://static.hm.com.cn/media/tool/template/images/3/2/3242a-3x2-1-the-easy-care-shirt.jpg"
                />
                <div className={styles.bottom}>
                    <div className={styles.subTitle}>从早到晚，利落有型</div>
                    <div className={styles.title}>易打理的衬衫</div>
                    <div className={styles.button}>
                        <Link href="/women">
                            <a>即刻选购</a>
                        </Link>
                        {/*<Link href="/men">*/}
                        {/*    <a>men</a>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Promotion
