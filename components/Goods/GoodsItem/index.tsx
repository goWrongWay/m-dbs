import { Goods } from '../../../interfaces'
import styles from './index.less'
type ListDetailProps = {
    data: Goods
}
const GoodsList = ({ data }: ListDetailProps) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <img className={styles.img} src={data.imgurl} alt="" />
            </div>
            {/*<img src="" alt=""/>*/}
            <div>
                <p>{data.title}</p>
                <p>{data.price}</p>
                <p>color1,color2</p>
            </div>
        </div>
    )
}
export default GoodsList
