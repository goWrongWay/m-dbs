import styles from './index.less'
import React from 'react'
import Faviorate from '../../components/Faviorate'

type Props = {
    show?: boolean
}

const AddToBagBar = ({ show = true }: Props) => {
    return (
        <div
            style={{ display: show ? 'flex' : 'none' }}
            className={styles.wrap}
        >
            <Faviorate></Faviorate>
            <a className={styles.button}>ADD TO BAG</a>
        </div>
    )
}

export default AddToBagBar
