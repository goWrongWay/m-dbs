type Props = {
    height?: string
    background?: string
}
const Separator = ({ height = '1px', background = '#ccc' }: Props) => (
    <div style={{ height, background }} />
)
export default Separator
