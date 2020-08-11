import styles from './index.less'
import Nav from '../Nav'

const Header = () => (
    <div className={styles.layout}>
        <Nav></Nav>
        <h1>DBS</h1>
        <div>Sign in / Register</div>
    </div>
)

export default Header
