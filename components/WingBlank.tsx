import { ReactNode } from 'react'
type Props = {
    children: ReactNode
}
const WingBlank = ({children}: Props) => (
    <div style={{margin: '0 3vmin'}}>
        {children}
    </div>
)
export default WingBlank