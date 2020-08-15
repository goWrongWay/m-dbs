type Props = {
    height?: string
    background?: string
}
const Separator = ({height='1px', background="#333"}: Props) => (
    <div style={{height, background}} />
)
export default Separator