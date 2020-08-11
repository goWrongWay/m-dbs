import Link from 'next/link'

import { User } from '../interfaces'
import useURL from '../hooks/useURL'

type Props = {
    data: User
}
const ListItem = ({ data }: Props) => {
    const { query } = useURL()
    return (
        <Link href="/users/[id]" as={{ pathname: `/users/${data.id}`, query }}>
            <a>
                {data.id}: {data.name}
            </a>
        </Link>
    )
}

export default ListItem
