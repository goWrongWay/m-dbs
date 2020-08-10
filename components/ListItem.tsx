import React, { useEffect } from 'react'
import Link from 'next/link'

import { User} from '../interfaces'

type Props = {
    data: User
}
const ListItem = ({ data }: Props) => {
    useEffect(() => {
        var s1 = 1;




        var s2 = 1;

    })
    return (
        <Link href="/users/[id]" as={`/users/${data.id}`}>
            <a>
                {data.id}: {data.name}
            </a>
        </Link>
    )
}

export default ListItem
